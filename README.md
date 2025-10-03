# Portfolio Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/29440a94-d2f4-4b09-8186-2441771c770e/deploy-status)](https://app.netlify.com/projects/portfolio-adam-frank/deploys)
![Last Commit](https://img.shields.io/github/last-commit/cfrank3N/portfolio_frontend)

A modern, responsive personal portfolio built with **React**, **TypeScript**, and **Vite**, deployed on **Netlify**.  
This project showcases my skills, experience, and projects with smooth UI interactions and simple yet effective visuals.

**Live site**: [portfolio-adam-frank.netlify.app](https://portfolio-adam-frank.netlify.app/)

---

## Features

- Fast build with **Vite**
- Fully responsive design (mobile, tablet, desktop)
- Modern styling with clean UI
- Project showcase & contact form

---

## Tech Stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) as build tool
- [ESLint](https://eslint.org/) for basic linting
- Styling: [React-Bootstrap](https://react-bootstrap.github.io/)
- Deployment: [Netlify](https://www.netlify.com/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/cfrank3N/portfolio_frontend.git
cd portfolio_frontend

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:5173](http://localhost:5173).

Note that you will have to develop your own api, in whatever language/framework you're most comfortable in,
to be able to fetch your pinned repos and send yourself an email, or you could just use an existing api.
Either way you have to change which api you call in the fetch statament located in RenderRepositories.tsx file and ContactForm.tsx.

ContactForm.tsx api call:

```
const response = await fetch(
    "https://portfolioapiadamfrank.azurewebsites.net/api/savemessage", //<-- Change this adress to your own api
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify({
            sendername: name,
            senderemail: email,
            content: message,
        }),
    }
);
```

RenderRepositories.tsx api call:

```
useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://portfolioapiadamfrank.azurewebsites.net/api/repos/pinned"); //<--Change this adress to yor own
        const repos: Repository[] = await response.json();
        setRepos(repos);
      } catch (e: any) {
        setError(e);
      }
    };
    fetchRepos();
}, []);
```

### Build for Production

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## Deployment

This project is configured for **Netlify** but can be deployed to any other similar service.

- **Build command**: `npm run build`
- **Publish directory**: `dist/`

Once pushed to `main`, Netlify automatically deploys the latest version.

---

## Contributing

I will not accept any contributions at the moment.

## Linting & Formatting

Run linting with:

```bash
npm run lint
# or
yarn lint
```

---

## Acknowledgments

- [Vite + React + TS starter](https://vitejs.dev/)
- [Netlify](https://www.netlify.com/) for hosting
- Blog posts and stack overflow for inspiration
