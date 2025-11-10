# Smartly.ai

Live demo: https://smartly-ai-two.vercel.app/

A small full-stack AI utilities project composed of a client and server. This repository contains two main folders:

- `smartlyai-client/` — React + Vite front-end (UI, pages, components)
- `smartlyai-server/` — Node/Express backend (API, controllers, Cloudinary, DB config)

This `readme.md` provides a quick overview to run the project locally and the most important environment variables.

## Quickstart (Windows / PowerShell)

1. Client

```powershell
cd "C:\Users\Desktop\Smartly.ai\smartlyai-client"
npm install
npm run dev
```

2. Server

```powershell
cd "C:\Users\Desktop\Smartly.ai\smartlyai-server"
npm install
# If package.json defines a start script:
npm start
# Otherwise run directly:
node server.js
```

3. Environment

Create `.env` files in the `smartlyai-client/` and `smartlyai-server/` folders as needed. Typical server-side variables (example):

- `MONGODB_URI` — MongoDB connection string
- `PORT` — port server listens on (e.g. 5000)
- `CLOUDINARY_CLOUD_NAME` — Cloudinary cloud name
- `CLOUDINARY_API_KEY` — Cloudinary API key
- `CLOUDINARY_API_SECRET` — Cloudinary API secret
- `JWT_SECRET` — JSON Web Token secret

Client-side `.env` variables depend on how the front-end reads them (check `smartlyai-client/.env` or `vite` config if present).

## Repo structure (high level)

- `smartlyai-client/` — React app (Vite)

  - `src/` — components and pages

- `smartlyai-server/` — Express API
  - `config/` — `cloudinary.js`, `db.js`, `multer.js`
  - `controllers/` — request handlers
  - `routes/` — route definitions

## Notes

- Live demo shown above is hosted at Vercel: https://quickai-gs.vercel.app/
- If you want me to also add a separate `remade.md` (you asked about that earlier), tell me what content you want or confirm that `readme.md` is sufficient.
- If you want me to commit and push to `origin`, confirm and I'll push (I can push to the existing HTTPS origin URL already configured in this repo).

## Contributing

1. Create a branch
2. Make changes and run local tests
3. Commit and open a PR



