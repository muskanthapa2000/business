import React, { useRef, useState, useEffect, useMemo } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  const homeRef = useRef();
  const coursesRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const [active, setActive] = useState('home');
  const [contactPrefill, setContactPrefill] = useState(null);

  const sections = useMemo(() => [
    { id: 'home', ref: homeRef },
    { id: 'courses', ref: coursesRef },
    { id: 'about', ref: aboutRef },
    { id: 'contact', ref: contactRef },
  ], [homeRef, coursesRef, aboutRef, contactRef]);

  function scrollTo(id) {
    const s = sections.find(x => x.id === id);
    if (s && s.ref && s.ref.current) {
      s.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    }
  }

  useEffect(() => {
    const obsOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-section');
          if (id) setActive(id);
        }
      });
    }, obsOptions);

    sections.forEach(s => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="App">
      <NavBar active={active} onNavigate={scrollTo} />
      <main className="App-main">
        <section ref={homeRef} data-section="home">
          <Home onNavigate={scrollTo} />
        </section>
        <section ref={coursesRef} data-section="courses">
          <Courses setContactPrefill={setContactPrefill} onNavigate={scrollTo} />
        </section>

        <section ref={contactRef} data-section="contact">
          <Contact prefill={contactPrefill} />
        </section>
      </main>
      <footer className="App-footer"  ref={aboutRef} data-section="about">
        <div className="container">
              <h3>Stock Bazar Academy</h3>
              <p>We provide practical stock market education built from real trading experience. Our programs combine live sessions, recorded lessons and mentorship to help students become consistently profitable traders.</p>
          <div className="footer-bottom">© {new Date().getFullYear()} Stock Bazar Academy — All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
