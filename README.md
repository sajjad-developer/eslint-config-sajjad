# ESLint Config - Sajjad

This repository contains a custom ESLint configuration for JavaScript, TypeScript, and React projects. It enforces clean coding standards, such as Allman brace style, semicolon usage, and proper TypeScript linting.

## Features
- **JavaScript, TypeScript, and React support**: Linting for `.js`, `.mjs`, `.cjs`, `.ts`, `.jsx`, and `.tsx` files.
- **Global variables**: Ensures `$` is globally available (often used with jQuery).
- **Code style**: Enforces **Allman brace style** and **always using semicolons**.
- **Custom ESLint plugins**: Includes `@eslint/js`, `eslint-plugin-react`, and `typescript-eslint` for TypeScript linting.

## Installation

To use this custom ESLint configuration in your own project, follow the steps below:

### Step 1: Install ESLint

If ESLint is not already installed in your project, run the following command in your project directory:

```bash
npm install --save-dev eslint
