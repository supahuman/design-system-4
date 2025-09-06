# Meroka Design System Documentation

Welcome to the Meroka Design System - a modern, TypeScript-based design system built with React and Atomic Design principles.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start playground
pnpm run playground

# Build tokens
pnpm run build
```

## 📁 Project Structure

```
design-system-4/
├── packages/
│   ├── tokens/          # Design tokens (colors, spacing, typography)
│   └── atoms/           # Basic components (Button, Input, etc.)
├── apps/
│   └── playground/      # Component playground & demos
├── docs/               # Documentation
└── tools/              # Build tools & utilities
```

## 📖 Documentation

- [Getting Started](./getting-started.md)
- [Design Tokens](./design-tokens.md)
- [Components](./components.md)
- [Contributing](./contributing.md)
- [Deployment](./deployment.md)

## 🎨 Design Principles

### Atomic Design

Our design system follows Brad Frost's Atomic Design methodology:

- **Tokens**: Design foundations (colors, spacing, typography)
- **Atoms**: Basic building blocks (Button, Input, Icon)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex UI components
- **Templates**: Page-level layouts

### TypeScript First

- Full TypeScript support with strict type checking
- Auto-generated type definitions
- IntelliSense support in your IDE

### Developer Experience

- Fast builds with Vite
- Hot reload in development
- Comprehensive linting and formatting
- Automated CI/CD pipeline

## 🛠 Tech Stack

- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **pnpm** - Package manager
- **ESLint & Prettier** - Code quality
- **Changesets** - Version management
- **Vercel** - Deployment

## 📦 Packages

### @meroka/tokens

Core design tokens including colors, spacing, typography, and more.

### @meroka/atoms

Basic React components that follow our design system principles.

## 🚀 Getting Started

See our [Getting Started guide](./getting-started.md) for detailed setup instructions.

## 🤝 Contributing

See our [Contributing guide](./contributing.md) for information about our development process.
