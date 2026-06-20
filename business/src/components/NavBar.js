import React from 'react';

export default function NavBar({ route, onNavigate }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => onNavigate('home')}>
          <img src="/assets/logo.svg" alt="logo" className="brand-logo" />
          <span className="brand-title">Stock Bazar Academy</span>
        </div>
        <nav className="nav-links">
          <button className={route === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</button>
          <button className={route === 'courses' ? 'active' : ''} onClick={() => onNavigate('courses')}>Courses</button>
          <button className={route === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About</button>
          <button className={route === 'contact' ? 'active' : ''} onClick={() => onNavigate('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
