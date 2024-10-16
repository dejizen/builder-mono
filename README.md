# BUILDER MONO REPO

This is a package tath can help you to build websites.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: a working website in NextJs that use the builder library
- `packages/builder`: the builder core library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Versions

nvm - 0.39.2
node - 21.1.0
pnpm - 8.15.6
