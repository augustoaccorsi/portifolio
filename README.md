# Augusto Accorsi — Portfolio

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?style=flat-square&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=flat-square&logo=styled-components&logoColor=white)

**Live**: [augustoaccorsi.github.io/portifolio](https://augustoaccorsi.github.io/portifolio)

## Stack

- **React 19** + **React Router DOM** — SPA with client-side routing
- **Styled Components** — CSS-in-JS with light/dark theme support
- **Vite** — build tooling
- **React Icons** — icon library
- **Axios** — GitHub API integration for projects

## Features

- Terminal/code editor aesthetic with monospace typography
- Dark and light themes (Material Ocean / Indigo Slate)
- Mobile swipe navigation between pages
- Responsive layout with hamburger menu
- GitHub projects fetched live from the API

## Project Structure

```
src/
├── components/
│   ├── Header/          # Fixed nav bar with swipe + scroll navigation
│   ├── ThemeToggle/     # Dark/light switcher
│   ├── WorkExperience/  # Work experience card
│   ├── Education/       # Education card
│   └── Achievement/     # Achievements card
├── pages/
│   ├── Home/            # Hero / landing
│   ├── About/           # Bio, work experience, education
│   ├── TechStack/       # Tech icons grid
│   ├── Projects/        # GitHub repos
│   └── Contact/         # Contact links
├── context/             # Theme + GitHub data context
├── data/                # JSON — work experience, education, achievements, tech stack
├── styles/
│   └── theme/           # default.js (light) and dark.js (dark) theme tokens
└── utils/               # Image generator, constants
```

## Getting Started

```bash
git clone https://github.com/augustoaccorsi/portifolio.git
cd portifolio
npm install
npm run dev
```

Open `http://localhost:5173/portifolio/`

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions. Manual deploy: `npm run deploy`.

## Contact

[augusto.accorsi@gmail.com](mailto:augusto.accorsi@gmail.com) · [LinkedIn](https://www.linkedin.com/in/augusto-accorsi/) · [GitHub](https://github.com/augustoaccorsi)
