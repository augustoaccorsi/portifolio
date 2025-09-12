# 🚀 Augusto Accorsi - Portfolio

A modern, responsive portfolio website built with React, showcasing my journey as a Senior Software Developer at SAP Labs Latin America.

![Portfolio Preview](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

🌐 **Live Demo**: [https://augustoaccorsi.github.io/portifolio](https://augustoaccorsi.github.io/portifolio)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations and transitions
- **🌓 Dark/Light Theme**: Toggle between themes with persistent user preference
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎯 Interactive Elements**: Hover effects, smooth scrolling, and engaging micro-interactions
- **📧 Contact Integration**: Direct email functionality for easy communication
- **🔧 Component-Based**: Modular React architecture for maintainability

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **React Router DOM** - Client-side routing
- **Styled Components** - CSS-in-JS styling solution
- **React Icons** - Beautiful icon library

### Development Tools
- **Vite** - Next-generation frontend tooling
- **ESLint** - Code linting and formatting
- **Axios** - HTTP client for API requests

### Additional Libraries
- **Jdenticon** - Identicon generation
- **Abstract Image** - Image processing utilities

## 🏗️ Project Structure

```
my-portfolio/
├── public/
│   ├── stack/              # Technology stack icons
│   ├── me.jpg             # Profile image
│   └── logo files         # Brand logos
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header/        # Navigation header
│   │   ├── ThemeToggle/   # Dark/light theme switcher
│   │   ├── Education/     # Education section
│   │   └── WorkExperience/ # Work experience component
│   ├── pages/             # Main page components
│   │   ├── Home/          # Landing page
│   │   ├── About/         # About me section
│   │   ├── TechStack/     # Technology showcase
│   │   ├── Projects/      # Project portfolio
│   │   └── Contact/       # Contact form
│   ├── styles/            # Theme and global styles
│   │   └── theme/         # Light and dark theme definitions
│   ├── data/              # JSON data files
│   ├── context/           # React context providers
│   └── utils/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/augustoaccorsi/portifolio.git
   cd portifolio/my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/portifolio/` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🌐 Deployment to GitHub Pages

This portfolio is configured for easy deployment to GitHub Pages using two methods:

### Method 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

**Setup Steps:**

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Wait for deployment**
   - Check the "Actions" tab in your repository
   - The workflow will automatically build and deploy your site
   - Your site will be available at: `https://augustoaccorsi.github.io/portifolio`

### Method 2: Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at the configured homepage URL

### Deployment Configuration

The project is pre-configured with:

- **Vite Config**: Base path set to `/portifolio/` for GitHub Pages
- **Package.json**: Homepage URL and deployment scripts
- **GitHub Actions**: Automated workflow for CI/CD
- **gh-pages**: Manual deployment option

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Update the `cname` field in `.github/workflows/deploy.yml`
3. Configure your domain's DNS to point to GitHub Pages

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions! Feel free to:

1. Open an issue for bugs or suggestions
2. Fork the repository for your own portfolio inspiration
3. Submit pull requests for improvements

## 📞 Contact

- **Email**: [augusto.accorsi@gmail.com](mailto:augusto.accorsi@gmail.com)
- **LinkedIn**: [linkedin.com/in/augusto-accorsi](https://www.linkedin.com/in/augusto-accorsi/)
- **GitHub**: [github.com/augustoaccorsi](https://github.com/augustoaccorsi)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Augusto Accorsi**

*Showcasing modern web development practices and professional experience in enterprise software development.*
