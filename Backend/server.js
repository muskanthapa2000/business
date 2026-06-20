require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
  secure: process.env.SMTP_SECURE === 'true',
  auth: process.env.SMTP_USER ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  } : undefined,
});

app.post('/api/contact', async (req, res) => {
  try {
    const { to = process.env.TO_EMAIL || '7022muskan@gmail.com', name = '', email = '', message = '' } = req.body;

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER || 'noreply@example.com',
      to,
      subject: `Contact form: ${name || email}`,
      text: `Sender name: ${name}\nSender email: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
