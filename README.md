# Augusto Accorsi — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

**Live**: [augustoaccorsi.vercel.app](https://augustoaccorsi.vercel.app)

## Stack

- **Next.js 14** — App Router, SSR/SSG
- **TypeScript 5** — end-to-end type safety
- **Tailwind CSS 3** — utility-first styling with light/dark theme support
- **Framer Motion** — animations and transitions
- **Lucide React** + **React Icons** — icon libraries
- **Axios** — GitHub API integration for projects

## Features

- Light and dark themes
- Animated section transitions
- Work experience timeline with interactive cards
- GitHub projects fetched live from the API
- Resume download
- Fully responsive layout

## Project Structure

```
src/
├── app/                 # Next.js App Router pages and layout
├── components/
│   ├── sections/        # Hero, About, WorkExperience, Projects, Contact, etc.
│   └── ui/              # Shared UI primitives
├── data/                # JSON — work experience, education, tech stack
└── styles/              # Global CSS and Tailwind config
```

## Getting Started

```bash
git clone https://github.com/augustoaccorsi/portifolio.git
cd portifolio
npm install
npm run dev
```

Open `http://localhost:3000`

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` deploy automatically.

## Contact

[augusto.accorsi@gmail.com](mailto:augusto.accorsi@gmail.com) · [LinkedIn](https://www.linkedin.com/in/augusto-accorsi/) · [GitHub](https://github.com/augustoaccorsi)
