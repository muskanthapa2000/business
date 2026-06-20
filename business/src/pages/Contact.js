import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section className="container contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={update} />
        <label>Email</label>
        <input name="email" value={form.email} onChange={update} />
        <label>Message</label>
        <textarea name="message" value={form.message} onChange={update} />
        <div className="actions">
          <button className="btn primary" type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}
