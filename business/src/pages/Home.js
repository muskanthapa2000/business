import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <section className="home container">
      <div className="hero">
        <div className="hero-content">
          <h1>Learn Stock Market Trading with Confidence</h1>
          <p>Practical courses, live sessions, and mentorship to help you trade smarter.</p>
          <div className="hero-ctas">
            <button onClick={() => onNavigate('courses')} className="btn primary">Explore Courses</button>
            <button onClick={() => onNavigate('contact')} className="btn outline">Get In Touch</button>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/hero.svg" alt="hero" />
        </div>
      </div>

      <section className="features">
        <h2>What we offer</h2>
        <div className="grid">
          <div className="card">Live Trading Rooms</div>
          <div className="card">Structured Courses</div>
          <div className="card">One-on-one Mentoring</div>
        </div>
      </section>

      <section className="preview">
        <h2>Popular Courses</h2>
        <div className="grid cards">
          <div className="course-card">
            <h3>Beginner's Trading</h3>
            <p>Foundations of markets, risk, and basic strategies.</p>
          </div>
          <div className="course-card">
            <h3>Intraday Strategies</h3>
            <p>High-probability setups and trade management.</p>
          </div>
          <div className="course-card">
            <h3>Options Trading</h3>
            <p>Practical options strategies for income and hedging.</p>
          </div>
        </div>
      </section>
    </section>
  );
}
