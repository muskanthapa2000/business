# Backend for Stock Bazar Academy

Simple Express backend to send contact form emails via SMTP using Nodemailer.

Setup

1. Copy `.env.example` to `.env` and fill SMTP settings.
2. Install dependencies:

```bash
cd Backend
npm install
```

3. Start server:

```bash
npm start
```

By default it listens on port 5001. The frontend expects the endpoint at `/api/contact` on the same host; when developing locally you can run the backend on 5001 and the frontend on 3000 — the frontend will POST to `/api/contact` and the CRA dev server will proxy requests if configured, or you can set up a proxy in `package.json`.
