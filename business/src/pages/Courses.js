import React, { useState } from 'react';

const sampleCourses = [
  { id: 1, title: "Beginner's Trading", desc: 'Market basics, chart reading, risk management.' },
  { id: 2, title: 'Intraday Strategies', desc: 'Scalp and momentum setups with examples.' },
  { id: 3, title: 'Options Trading', desc: 'Option Greeks, spreads and income strategies.' },
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
                <p>More details about {c.title}: This course includes video lessons, live Q&A and actionable assignments.</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
