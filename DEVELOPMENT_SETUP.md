# Development Setup Guide

This document outlines the essential dependencies, tools, and configurations that have been set up for this Next.js project.

## 📦 Installed Dependencies

### Production Dependencies

- **zod** (^3.23.8) - Schema validation library
- **@hookform/resolvers** (^3.9.0) - Resolvers for react-hook-form (Zod integration)
- **sharp** (^0.33.5) - Image optimization for Next.js (recommended by Next.js)

### Development Dependencies

- **@typescript-eslint/eslint-plugin** (^7.18.0) - TypeScript ESLint plugin
- **@typescript-eslint/parser** (^7.18.0) - TypeScript parser for ESLint
- **prettier** (^3.3.3) - Code formatter
- **prettier-plugin-tailwindcss** (^0.6.6) - Prettier plugin for Tailwind CSS class sorting
- **husky** (^9.1.6) - Git hooks manager
- **lint-staged** (^15.2.11) - Run linters on staged files
- **@next/bundle-analyzer** (^14.2.0) - Analyze Next.js bundle size

## 🛠️ Configuration Files

### Prettier (`.prettierrc`)

- Configured with Tailwind CSS plugin for automatic class sorting
- Uses 2-space indentation, semicolons, and double quotes
- Line width: 80 characters

### ESLint (`.eslintrc.json`)

- Extended with TypeScript support
- Includes recommended TypeScript rules
- Configured to work with Next.js and React

### Lint-Staged (`.lintstagedrc.json`)

- Automatically runs ESLint and Prettier on staged files before commit
- Processes: `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.css`, `.scss`, `.md`

### EditorConfig (`.editorconfig`)

- Ensures consistent coding styles across different editors
- Configured for 2-space indentation, UTF-8, LF line endings

### VS Code Settings (`.vscode/`)

- **extensions.json**: Recommends essential extensions
- **settings.json**: Configures format on save, ESLint auto-fix, and TypeScript settings

## 🪝 Git Hooks (Husky)

### Pre-commit Hook

- Automatically runs `lint-staged` before each commit
- Ensures all staged files are properly formatted and linted
- Prevents commits with linting errors

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format all files with Prettier
npm run format:check # Check if files are formatted
npm run type-check   # Run TypeScript type checking
```

## 🔌 Recommended VS Code Extensions

The following extensions are recommended (VS Code will prompt you to install them):

1. **ESLint** (`dbaeumer.vscode-eslint`)
   - Provides linting support for JavaScript and TypeScript

2. **Prettier** (`esbenp.prettier-vscode`)
   - Code formatter that integrates with VS Code

3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Autocomplete, syntax highlighting, and linting for Tailwind CSS

4. **TypeScript and JavaScript Language Features** (built-in)
   - Enhanced TypeScript support

## 🚀 Usage

### Formatting Code

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

### Linting

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix
```

### Type Checking

```bash
# Check TypeScript types without building
npm run type-check
```

### Pre-commit Hooks

The pre-commit hook runs automatically when you commit. It will:

1. Run ESLint on staged files
2. Format staged files with Prettier
3. Prevent commit if there are unfixable errors

To skip hooks (not recommended):

```bash
git commit --no-verify
```

## 📚 Additional Resources

- [Prettier Documentation](https://prettier.io/docs/en/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Zod Documentation](https://zod.dev/)
- [React Hook Form with Zod](https://react-hook-form.com/get-started#SchemaValidation)

## 🔧 Troubleshooting

### Prettier not formatting on save

- Ensure Prettier extension is installed in VS Code
- Check that `editor.formatOnSave` is enabled in VS Code settings
- Verify `.prettierrc` file exists in project root

### ESLint errors not showing

- Ensure ESLint extension is installed in VS Code
- Check that ESLint is enabled in VS Code settings
- Run `npm run lint` to see errors in terminal

### Husky hooks not running

- Ensure `.husky` directory exists
- Run `chmod +x .husky/pre-commit` to make hook executable
- Verify `prepare` script in `package.json` runs `husky`
