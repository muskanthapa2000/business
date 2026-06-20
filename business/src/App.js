import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="App">
      <NavBar route={route} onNavigate={setRoute} />
      <main className="App-main">
        {route === 'home' && <Home onNavigate={setRoute} />}
        {route === 'courses' && <Courses />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>
      <footer className="App-footer">
        <div className="container">© {new Date().getFullYear()} Stock Bazar Academy — All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
