import React, { useState } from 'react';

const sampleCourses = [
  {
    id: 1,
    title: "Beginner's Trading",
    desc: 'Market basics, chart reading, risk management.',
    details: {
      overview: 'Start your trading journey with a strong foundation. This course is designed for absolute beginners who want to understand how financial markets work and how to trade with confidence.',
      learn: [
        'Introduction to stock markets and how trading works',
        'Understanding charts, candlesticks, and price action',
        'Basics of technical analysis and indicators',
        'Risk management and capital protection strategies',
        'Common beginner mistakes and how to avoid them',
      ],
      forWho: [
        'Beginners with no prior trading experience',
        'Investors looking to shift into active trading',
        'Anyone who wants to build a strong base in trading',
      ],
      included: [
        'Step-by-step video lessons',
        'Live Q&A sessions with experts',
        'Practical assignments and exercises',
        'Real market examples for better understanding',
      ],
      cta: 'Build your confidence before risking real money.',
    },
  },
  {
    id: 2,
    title: 'Intraday Trading Strategies',
    desc: 'Scalp and momentum setups with examples.',
    details: {
      overview: 'Master the art of short-term trading with proven intraday strategies. Learn how to identify opportunities and execute trades within the same day.',
      learn: [
        'Scalp trading and momentum-based setups',
        'Entry and exit strategies for maximum efficiency',
        'Volume analysis and breakout trading',
        'Risk-reward management for intraday trades',
        'Real-time trade examples and case studies',
      ],
      forWho: [
        'Traders who want to earn from daily market movements',
        'Working professionals looking for part-time trading',
        'Beginners ready to move to intermediate level',
      ],
      included: [
        'Live market sessions',
        'Strategy breakdown with real charts',
        'Trade execution techniques',
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
      overview: 'Unlock advanced trading strategies using options. Learn how to generate income and hedge risk using professional-level techniques.',
      learn: [
        'Basics of options and how they work',
        'Option Greeks (Delta, Theta, Vega, Gamma)',
        'Popular strategies: spreads, straddles, strangles',
        'Income strategies for consistent returns',
        'Risk hedging techniques for volatile markets',
      ],
      forWho: [
        'Intermediate to advanced traders',
        'Traders looking to diversify strategies',
        'Investors interested in hedging risk',
      ],
      included: [
        'Advanced video modules',
        'Strategy simulations',
        'Live Q&A sessions',
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
                <h4>Overview</h4>
                <p>{c.details.overview}</p>

                <h4>What you'll learn:</h4>
                <ul>
                  {c.details.learn.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h4>Who is this for?</h4>
                <ul>
                  {c.details.forWho.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h4>What's included:</h4>
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
