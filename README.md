# Cory Ball Personal Portfolio

Simple PWA-compatible SPA showcasing development skills including:

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- [TailwindCSS](https://tailwindcss.com/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- Deployment using [Docker](https://www.docker.com/)
- Hosted using [Traefik](https://traefik.io/)


## Get it running locally
Requirements:

- Node
- Docker (Optional)

```bash
## Install deps
yarn
# or
npm -i

# With Docker
docker-compose -f docker-compose-dev.yml up -d
# Without Docker
yarn dev
# or (Optimized production build)
yarn build
yarn start
```