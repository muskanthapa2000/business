import React from 'react';

export default function NavBar({ active, onNavigate }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => onNavigate('home')}>
          <img src="/assets/logo.svg" alt="logo" className="brand-logo" />
          <span className="brand-title">Stock Bazar Academy</span>
        </div>
        <nav className="nav-links">
          <button className={active === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</button>
          <button className={active === 'courses' ? 'active' : ''} onClick={() => onNavigate('courses')}>Courses</button>
          <button className={active === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About</button>
          <button className={active === 'contact' ? 'active' : ''} onClick={() => onNavigate('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
