import React, { useState, useEffect } from 'react';

export default function Contact({ prefill }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (prefill) {
      setForm(f => ({ ...f, ...prefill }));
    }
  }, [prefill]);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function send(e) {
    e.preventDefault();
    const subject = encodeURIComponent('Stock Bazar Academy inquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=7022muskan@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setStatus('opened');
  }

  return (
    <section className="container contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={send}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={update} />
        <label>Email</label>
        <input name="email" value={form.email} onChange={update} />
        <label>Message</label>
        <textarea name="message" value={form.message} onChange={update} />
        <div className="actions">
          <button className="btn primary" type="submit">Send Message</button>
        </div>
        {status === 'opened' && <p>Please complete the email in your mail app and send it.</p>}
      </form>
    </section>
  );
}
