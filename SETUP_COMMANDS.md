# Setup Commands for Similar Next.js Application

This document contains all the terminal commands needed to set up a similar Next.js application from scratch.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Step-by-Step Setup Commands

### 1. Initialize Next.js Project with TypeScript

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

Or if you prefer to set it up manually:

```bash
# Create project directory
mkdir my-app
cd my-app

# Initialize package.json
npm init -y

# Install Next.js, React, and React DOM
npm install next@^14.2.0 react@^18.3.1 react-dom@^18.3.1

# Install TypeScript and type definitions
npm install -D typescript@^5.5.0 @types/node@^20.14.0 @types/react@^18.3.0 @types/react-dom@^18.3.0
```

### 2. Install Tailwind CSS and PostCSS

```bash
npm install -D tailwindcss@^3.4.4 postcss@^8.4.39 autoprefixer@^10.4.19

# Initialize Tailwind config
npx tailwindcss init -p
```

### 3. Install Core Dependencies

```bash
# Form handling and validation
npm install react-hook-form@^7.52.0 @hookform/resolvers@^3.9.0 zod@^3.23.8

# Calendar functionality
npm install @fullcalendar/react@^6.1.15 @fullcalendar/daygrid@^6.1.15 @fullcalendar/interaction@^6.1.15

# Animations
npm install framer-motion@^12.23.24

# Icons
npm install react-icons@^5.5.0

# RSS parsing
npm install rss-parser@^3.13.0

# Image optimization
npm install sharp@^0.33.5

# Utility libraries
npm install tailwind-merge@^3.3.1
```

### 4. Install Development Dependencies

```bash
# ESLint and TypeScript ESLint
npm install -D eslint@^8.57.0 eslint-config-next@^14.2.0 @typescript-eslint/eslint-plugin@^7.18.0 @typescript-eslint/parser@^7.18.0

# Prettier and Tailwind plugin
npm install -D prettier@^3.3.3 prettier-plugin-tailwindcss@^0.6.6

# Git hooks
npm install -D husky@^9.1.6 lint-staged@^15.2.11

# Bundle analyzer (optional)
npm install -D @next/bundle-analyzer@^14.2.0
```

### 5. Initialize Git Hooks (Husky)

```bash
# Initialize Husky
npx husky init

# Add prepare script to package.json (if not already added)
# "prepare": "husky || true"
```

### 6. All-in-One Installation Command

If you want to install everything at once, you can use this combined command:

```bash
# Core dependencies
npm install next@^14.2.0 react@^18.3.1 react-dom@^18.3.1 react-hook-form@^7.52.0 @hookform/resolvers@^3.9.0 zod@^3.23.8 @fullcalendar/react@^6.1.15 @fullcalendar/daygrid@^6.1.15 @fullcalendar/interaction@^6.1.15 framer-motion@^12.23.24 react-icons@^5.5.0 rss-parser@^3.13.0 sharp@^0.33.5 tailwind-merge@^3.3.1

# Development dependencies
npm install -D typescript@^5.5.0 @types/node@^20.14.0 @types/react@^18.3.0 @types/react-dom@^18.3.0 tailwindcss@^3.4.4 postcss@^8.4.39 autoprefixer@^10.4.19 eslint@^8.57.0 eslint-config-next@^14.2.0 @typescript-eslint/eslint-plugin@^7.18.0 @typescript-eslint/parser@^7.18.0 prettier@^3.3.3 prettier-plugin-tailwindcss@^0.6.6 husky@^9.1.6 lint-staged@^15.2.11 @next/bundle-analyzer@^14.2.0
```

### 7. Initialize Configuration Files

After installation, you'll need to create/configure these files:

```bash
# Initialize Tailwind (if not done in step 2)
npx tailwindcss init -p

# Initialize TypeScript config (if not created by create-next-app)
npx tsc --init
```

### 8. Verify Installation

```bash
# Check installed packages
npm list --depth=0

# Run type checking
npm run type-check

# Run linter
npm run lint

# Start development server
npm run dev
```

## Quick Start Script

You can also create a setup script. Save this as `setup.sh`:

```bash
#!/bin/bash

# Create Next.js app
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --yes

# Install all dependencies
npm install react-hook-form@^7.52.0 @hookform/resolvers@^3.9.0 zod@^3.23.8 @fullcalendar/react@^6.1.15 @fullcalendar/daygrid@^6.1.15 @fullcalendar/interaction@^6.1.15 framer-motion@^12.23.24 react-icons@^5.5.0 rss-parser@^3.13.0 sharp@^0.33.5 tailwind-merge@^3.3.1

npm install -D @typescript-eslint/eslint-plugin@^7.18.0 @typescript-eslint/parser@^7.18.0 prettier@^3.3.3 prettier-plugin-tailwindcss@^0.6.6 husky@^9.1.6 lint-staged@^15.2.11 @next/bundle-analyzer@^14.2.0

# Initialize Husky
npx husky init

echo "Setup complete! Run 'npm run dev' to start the development server."
```

## Notes

- Replace version numbers (e.g., `^14.2.0`) with `latest` if you want the most recent versions
- The `--yes` flag in create-next-app skips interactive prompts
- Husky setup may require additional configuration in `.husky/pre-commit`
- Make sure to configure your `tsconfig.json`, `tailwind.config.ts`, and `next.config.js` files according to your project needs
