# swagger-generate-demo

## Description

This repository for demo: https://github.com/tamdao/swagger-to-typescript and https://github.com/tamdao/dropwizard-kotlin-gradle

## Installation

To install the dependencies for "swagger-generate-demo", run the following command:

```bash
npm install
```

**Note:** `swagger-to-typescript-interface` package is https://github.com/tamdao/swagger-to-typescript I have published it to npm for easy write demo

## Usage

To run import the csv data to backend, use:

```bash
npm start
```

To generate TypeScript interfaces from a Swagger/OpenAPI specification, run:

```bash
npm run generate
```

Additional scripts include:

- `npm run lint`: Lints the `src` directory using ESLint.
- `npm run prepare`: Installs Husky for git hooks.
- `npm run test`: Runs tests with Vitest and generates coverage reports.
