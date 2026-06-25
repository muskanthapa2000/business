import React from 'react';

export default function Home({ onNavigate }) {
  const offerings = [
    {
      icon: '🔴',
      title: 'Live Trading Rooms',
      desc: 'Experience the market in real-time with expert traders. Watch how professionals analyze charts, take positions, and manage risk during live market hours.',
      highlights: [
        'Real-time trade execution',
        'Live market analysis',
        'Interactive Q&A during sessions',
        'Learn discipline and decision-making',
      ],
    },
    {
      icon: '📚',
      title: 'Structured Courses',
      desc: 'Step-by-step learning programs designed for all levels — from beginner to advanced traders.',
      highlights: [
        'Beginner to advanced modules',
        'Easy-to-understand concepts',
        'Real market examples',
        'Assignments and practice exercises',
      ],
    },
    {
      icon: '🤝',
      title: 'One-on-One Mentoring',
      desc: 'Get personalized guidance tailored to your trading goals and experience level.',
      highlights: [
        'Direct mentorship from experts',
        'Strategy customization',
        'Portfolio and trade review',
        'Performance improvement guidance',
      ],
    },
  ];

  return (
    <section className="home">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Learn Stock Market Trading with Confidence</h1>
            <p>Master the art of trading with practical knowledge, real-time market experience, and expert mentorship. Backed by <b>7+ years of market experience,</b> our programs are designed to simplify complex trading concepts and help you become a confident, disciplined trader.</p>
                
                <p> Whether you're a beginner or an experienced trader, our programs are designed to help you make smarter, data-driven decisions in the stock market.</p>
            <p className="hero-subtext">We focus on <strong>real-world strategies</strong>, <strong>risk management</strong>, and <strong>consistent growth</strong>, so you can trade with confidence — not guesswork.</p>
            <p className="hero-cta">👉 Start your journey towards financial independence today.</p>
            <div className="hero-ctas">
              <button onClick={() => onNavigate('courses')} className="btn primary">Explore Courses</button>
              <button onClick={() => onNavigate('contact')} className="btn outline">Get In Touch</button>
            </div>
          </div>
          <div className="hero-media">
            <img src="/assets/Logo.jpeg" alt="hero" />
          </div>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="grid offerings">
            {offerings.map((offer, idx) => (
              <div key={idx} className="offering-card">
                <div className="offering-icon">{offer.icon}</div>
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
                <ul className="offering-highlights">
                  {offer.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
