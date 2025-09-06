# Getting Started

## Prerequisites

- Node.js 20+
- pnpm 9+

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/supahuman/design-system-4.git
cd design-system-4
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development

```bash
# Start the playground app
pnpm run playground

# Or build everything
pnpm run build
```

## Using in Your Project

### Install the Packages

```bash
# Install the design system packages
npm install @meroka/tokens @meroka/atoms
```

### Import Components

```tsx
import { Button } from '@meroka/atoms';
import '@meroka/tokens/tokens.css';

function App() {
  return (
    <Button variant="primary" size="medium">
      Hello World
    </Button>
  );
}
```

### Import Design Tokens

```tsx
import { colors, spacing, typography } from '@meroka/tokens';

// Use in JavaScript
const primaryColor = colors.primary[500];

// Or use CSS custom properties
.my-component {
  color: var(--colors-primary-500);
  padding: var(--spacing-4);
  font-family: var(--font-family-sans);
}
```

## Development Workflow

### 1. Make Changes

Edit components in `packages/atoms/` or tokens in `packages/tokens/`

### 2. Test in Playground

```bash
pnpm run playground
```

### 3. Build & Lint

```bash
pnpm run build
pnpm run lint
```

### 4. Create Changeset

```bash
npx changeset
```

### 5. Commit & Push

```bash
git add .
git commit -m "feat: add new component"
git push
```

## Commands Reference

```bash
# Development
pnpm run playground        # Start playground app
pnpm run dev              # Start all packages in dev mode

# Building
pnpm run build            # Build all packages
pnpm run build:tokens     # Build design tokens only

# Quality
pnpm run lint             # Lint all code
pnpm run format           # Format all code
pnpm run type-check       # Type check all packages

# Release
npx changeset             # Create a changeset
npx changeset version     # Bump versions
npx changeset publish     # Publish to npm
```

## Troubleshooting

### Common Issues

**Build Errors**: Make sure to build tokens first:

```bash
cd packages/tokens && pnpm run build
```

**Type Errors**: Check that all packages are built:

```bash
pnpm run build
```

**Import Errors**: Ensure you're importing from the correct packages:

```tsx
// ✅ Correct
import { Button } from '@meroka/atoms';

// ❌ Incorrect
import { Button } from '@meroka/atoms/Button';
```
