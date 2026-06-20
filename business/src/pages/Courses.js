import React, { useState } from 'react';

const sampleCourses = [
  {
    id: 1,
    title: "Beginner's Trading",
    desc: 'Market basics, chart reading, risk management.',
    details: {
      learn: [
        'Introduction to stock markets and trading mechanics',
        'Understanding charts and candlestick patterns',
        'Risk management and capital protection',
      ],
      included: [
        'Video lessons',
        'Live Q&A sessions',
        'Real market examples',
      ],
      cta: 'Build your confidence before risking real money.',
    },
  },
  {
    id: 2,
    title: 'Intraday Trading Strategies',
    desc: 'Scalp and momentum setups with examples.',
    details: {
      learn: [
        'Scalp trading and momentum-based setups',
        'Volume analysis and breakout trading',
        'Risk-reward management for intraday trades',
      ],
      included: [
        'Live market sessions',
        'Strategy breakdown with real charts',
        'Daily practice assignments',
      ],
      cta: 'Turn market volatility into opportunity.',
    },
  },
  {
    id: 3,
    title: 'Options Trading',
    desc: 'Option Greeks, spreads and income strategies.',
    details: {
      learn: [
        'Option Greeks (Delta, Theta, Vega, Gamma)',
        'Popular strategies: spreads and hedging',
        'Income generation and risk control',
      ],
      included: [
        'Advanced video modules',
        'Strategy simulations',
        'Real-world trading scenarios',
      ],
      cta: 'Trade smarter with controlled risk and higher potential.',
    },
  },
];


export default function Courses({ onNavigate, setContactPrefill }) {
  const [openId, setOpenId] = useState(null);

  function handleEnroll(course) {
    const prefill = {
      name: '',
      email: '',
      message: `Hello, I am interested in enrolling for the course: ${course.title}. Please share details and enrollment steps.`,
    };
    if (setContactPrefill) setContactPrefill(prefill);
    if (onNavigate) onNavigate('contact');
  }

  function handleDetails(id) {
    setOpenId(openId === id ? null : id);
  }
  return (
    <section className="container courses">
      <h2>Courses</h2>
      <div className="grid course-list">
        {sampleCourses.map(c => (
          <article key={c.id} className="course">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="actions">
              <button className="btn primary" onClick={() => handleEnroll(c)}>Enroll</button>
              <button className="btn outline" onClick={() => handleDetails(c.id)}>Details</button>
            </div>
            {openId === c.id && (
              <div className="course-details">
                <h4>Key Topics:</h4>
                <ul>
                  {c.details.learn.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h4>Includes:</h4>
                <ul>
                  {c.details.included.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p className="course-details-cta">👉 {c.details.cta}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
