import React from 'react';

const sampleCourses = [
  { id: 1, title: "Beginner's Trading", desc: 'Market basics, chart reading, risk management.' },
  { id: 2, title: 'Intraday Strategies', desc: 'Scalp and momentum setups with examples.' },
  { id: 3, title: 'Options Trading', desc: 'Option Greeks, spreads and income strategies.' },
];

export default function Courses() {
  return (
    <section className="container courses">
      <h2>Courses</h2>
      <div className="grid course-list">
        {sampleCourses.map(c => (
          <article key={c.id} className="course">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="actions">
              <button className="btn primary">Enroll</button>
              <button className="btn outline">Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
