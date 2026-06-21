import React, { useState, useEffect } from 'react';

export default function Contact({ prefill }) {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({ contact: '' });

  useEffect(() => {
    if (prefill) {
      setForm(f => ({ ...f, ...prefill }));
    }
  }, [prefill]);

  useEffect(() => {
    const contactError = form.contact && !/^\d{10}$/.test(form.contact)
      ? 'Contact number must be exactly 10 digits.'
      : '';
    setErrors({ contact: contactError });
  }, [form.contact]);

  function update(e) {
    const { name, value } = e.target;
    if (name === 'contact') {
      const digitsOnly = value.replace(/[^0-9]/g, '');
      setForm({ ...form, [name]: digitsOnly });
      return;
    }
    setForm({ ...form, [name]: value });
  }

  const isFormValid =
    form.name.trim().length > 0 &&
    form.contact.trim().length === 10 &&
    form.message.trim().length > 0 &&
    !errors.contact;

  function send(e) {
    e.preventDefault();
    if (!isFormValid) return;
    const subject = encodeURIComponent('Stock Bazar Academy inquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nContact: ${form.contact}\n\nMessage:\n${form.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=stockbazarjamalpur@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setStatus('opened');
  }

  return (
    <section className="container contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={send}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={update} />

        <label>Contact Number</label>
        <input name="contact" value={form.contact} onChange={update} maxLength={10} />
        {errors.contact && <p className="input-error">{errors.contact}</p>}

        <label>Message</label>
        <textarea name="message" value={form.message} onChange={update} />

        <div className="actions">
          <button className="btn primary" type="submit" disabled={!isFormValid}>Send Message</button>
        </div>
        {status === 'opened' && <p>Please complete the email in your mail app and send it.</p>}
      </form>
    </section>
  );
}
