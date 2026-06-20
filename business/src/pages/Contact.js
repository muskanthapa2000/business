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

  async function send(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: '7022muskan@gmail.com', ...form }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'error');
      }
    } catch (err) {
      setStatus('error');
    }
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
        {status === 'sending' && <p>Sending...</p>}
        {status === 'sent' && <p>Message sent — thank you!</p>}
        {status && status !== 'sending' && status !== 'sent' && <p>Error: {status}</p>}
      </form>
    </section>
  );
}
