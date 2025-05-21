# RRM Astro Minimal Template

A lightweight, performance-focused starter template for building modern websites with [Astro](https://astro.build/). This template provides a solid foundation with carefully selected integrations to help you build fast, optimized websites quickly.

[![Netlify Status](https://api.netlify.com/api/v1/badges/238c85ea-cf34-411c-8c90-bc97617aadef/deploy-status)](https://app.netlify.com/sites/usats/deploys)

## 🚀 Features

- ⚡️ **Performance-focused**: Built with performance in mind from the ground up
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- ⚛️ **React Components**: Use React components when needed for interactive UI elements
- 🔄 **Automatic Sitemap Generation**: SEO-friendly sitemap generated on build
- 🎭 **Partytown**: Run third-party scripts off the main thread for better performance
- ✨ **Clean Code**: Integrated with Prettier for consistent code formatting

## 📦 Integrations

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) - Automatic sitemap generation
- [Partytown](https://partytown.builder.io/) - Third-party script optimization
- [React](https://reactjs.org/) - UI component library
- [Prettier](https://prettier.io/) - Code formatter with Astro integration

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/usats.git
   cd usats
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 📝 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   └── styles/
│       └── ...
└── package.json
```

## 🚢 Deployment

This project is set up for easy deployment on Netlify. Simply connect your Netlify account to your repository, and your site will be automatically deployed on each push.

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally before deploying      |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/usats/issues).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
