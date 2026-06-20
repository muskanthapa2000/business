import React from 'react';

export default function About() {
  return (
    <section className="container about">
      <h2>About Stock Bazar Academy</h2>
      <p>
        We provide practical stock market education built from real trading experience.
        Our programs combine live sessions, recorded lessons and mentorship to help
        students become consistently profitable traders.
      </p>

      <div className="team grid">
        <div className="card">Founder & Mentor</div>
        <div className="card">Trading Coach</div>
        <div className="card">Support</div>
      </div>
    </section>
  );
}
