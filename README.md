# Events Availability Planner

This project is a solution for finding availability for events, which I created for a social group of about 20 people.
It is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development

### Installation

To get started, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

It is recommended (but not required) to run this project in VSCode. There are
some recommended extensions in the `.vscode/extensions.json` file to help with
development. These include:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - for linting JavaScript and TypeScript code.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - for formatting code.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - for Tailwind CSS support.

All commits will fail the CI/CD pipeline if the code is not formatted or linted correctly.
You can also run `npx next lint` to check for linting errors. Running `npx next lint --fix` will automatically fix most of the linting errors.

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

At the time of writing this project is deployed on my personal domain at [https://events.decesare.dev](https://events.decesare.dev),
on an Ubuntu VM.
