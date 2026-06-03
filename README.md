# Nexus Documentation (Nextra)

Self-hosted documentation site built with [Nextra 4](https://nextra.site). Styled with Nexus brand tokens from `DESIGN.md` (`#00D992` primary, `#101010` canvas). `DESIGN.md` is gitignored and kept local for reference.

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:3001**

The dev server runs on port **3001** so it can sit alongside the Nexus dashboard on port **3000**. Run the dashboard separately when you need both.

### Port already in use

If `npm run dev` fails with `EADDRINUSE` on port 3001, a previous dev server is still running. On Windows:

```powershell
netstat -ano | findstr :3001
taskkill /PID <pid> /F
npm run dev
```

Replace `<pid>` with the PID from the `LISTENING` row.

## Project structure

```
├── app/              # Next.js + Nextra layout
├── content/          # All MDX pages
│   ├── introduction.mdx
│   ├── quickstart.mdx
│   ├── concepts/
│   ├── sdk/
│   ├── api/
│   ├── guides/
│   ├── dashboard/
│   ├── deployment/
│   ├── faq.mdx
│   └── contributing.mdx
├── public/           # Logo, favicon
├── styles/           # Global styles
└── mdx-components.tsx
```

Nextra reads MDX from `content/`. URLs map as `/introduction`, `/concepts/agents`, etc.

## Build for production

```bash
npm run build
npm run start
```

Production also serves on port **3001** (`next start --port 3001`). Deploy as a standalone Next.js app (Vercel, Railway, or your VPS).

## Why Nextra instead of Mintlify?

- No external account or hosted dependency
- Same dark theme as the Nexus dashboard
- Full control over layout and components
- Docs live in your repo and deploy with your stack
