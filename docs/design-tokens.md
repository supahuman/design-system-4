# Design Tokens

Design tokens are the foundational elements of our design system. They define the visual language and ensure consistency across all components and applications.

## Token Categories

### Colors

Our color system uses a semantic approach with primary, secondary, and utility colors.

```typescript
import { colors } from '@meroka/tokens';

// Primary colors
colors.primary[50]; // Lightest
colors.primary[500]; // Base
colors.primary[900]; // Darkest

// Semantic colors
colors.success[500];
colors.warning[500];
colors.error[500];
colors.info[500];
```

#### CSS Variables

```css
/* Primary colors */
var(--colors-primary-50)
var(--colors-primary-100)
var(--colors-primary-200)
var(--colors-primary-300)
var(--colors-primary-400)
var(--colors-primary-500)  /* Base */
var(--colors-primary-600)
var(--colors-primary-700)
var(--colors-primary-800)
var(--colors-primary-900)

/* Semantic colors */
var(--colors-success-500)
var(--colors-warning-500)
var(--colors-error-500)
var(--colors-info-500)
```

### Spacing

Consistent spacing using a 4px base unit system.

```typescript
import { spacing } from '@meroka/tokens';

spacing[1]; // 4px
spacing[2]; // 8px
spacing[3]; // 12px
spacing[4]; // 16px
spacing[6]; // 24px
spacing[8]; // 32px
spacing[12]; // 48px
spacing[16]; // 64px
spacing[20]; // 80px
spacing[24]; // 96px
```

#### CSS Variables

```css
var(--spacing-1)   /* 4px */
var(--spacing-2)   /* 8px */
var(--spacing-3)   /* 12px */
var(--spacing-4)   /* 16px */
var(--spacing-6)   /* 24px */
var(--spacing-8)   /* 32px */
var(--spacing-12)  /* 48px */
var(--spacing-16)  /* 64px */
var(--spacing-20)  /* 80px */
var(--spacing-24)  /* 96px */
```

### Typography

Font families, sizes, weights, and line heights.

```typescript
import { typography } from '@meroka/tokens';

// Font families
typography.fontFamily.sans;
typography.fontFamily.serif;
typography.fontFamily.mono;

// Font sizes
typography.fontSize.xs; // 12px
typography.fontSize.sm; // 14px
typography.fontSize.base; // 16px
typography.fontSize.lg; // 18px
typography.fontSize.xl; // 20px
typography.fontSize['2xl']; // 24px
typography.fontSize['3xl']; // 30px
typography.fontSize['4xl']; // 36px
```

#### CSS Variables

```css
/* Font families */
var(--font-family-sans)
var(--font-family-serif)
var(--font-family-mono)

/* Font sizes */
var(--font-size-xs)
var(--font-size-sm)
var(--font-size-base)
var(--font-size-lg)
var(--font-size-xl)
var(--font-size-2xl)
var(--font-size-3xl)
var(--font-size-4xl)

/* Font weights */
var(--font-weight-light)
var(--font-weight-normal)
var(--font-weight-medium)
var(--font-weight-semibold)
var(--font-weight-bold)
```

### Border Radius

Consistent border radius values for creating cohesive rounded corners.

```typescript
import { borderRadius } from '@meroka/tokens';

borderRadius.none; // 0
borderRadius.sm; // 2px
borderRadius.base; // 4px
borderRadius.md; // 6px
borderRadius.lg; // 8px
borderRadius.xl; // 12px
borderRadius.full; // 9999px
```

### Shadows

Box shadow tokens for depth and elevation.

```typescript
import { shadows } from '@meroka/tokens';

shadows.sm;
shadows.base;
shadows.md;
shadows.lg;
shadows.xl;
```

### Z-Index

Layering system for managing stacking context.

```typescript
import { zIndex } from '@meroka/tokens';

zIndex.hide; // -1
zIndex.auto; // auto
zIndex.base; // 0
zIndex.docked; // 10
zIndex.dropdown; // 1000
zIndex.sticky; // 1100
zIndex.banner; // 1200
zIndex.overlay; // 1300
zIndex.modal; // 1400
zIndex.popover; // 1500
zIndex.tooltip; // 1600
```

## Usage Examples

### Using Tokens in Components

```tsx
import { colors, spacing, typography } from '@meroka/tokens';

const styles = {
  button: {
    backgroundColor: colors.primary[500],
    padding: `${spacing[3]}px ${spacing[6]}px`,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.sans,
  },
};
```

### Using CSS Variables

```css
.button {
  background-color: var(--colors-primary-500);
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
  font-family: var(--font-family-sans);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
}
```

### Custom CSS Properties

You can also create custom properties using our tokens:

```css
:root {
  --button-primary-bg: var(--colors-primary-500);
  --button-primary-text: var(--colors-white);
  --button-padding: var(--spacing-3) var(--spacing-6);
}

.button-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  padding: var(--button-padding);
}
```

## Token Generation

Our tokens are defined in `packages/tokens/tokens.json` and automatically generate:

1. **TypeScript exports** - `packages/tokens/index.ts`
2. **CSS custom properties** - `packages/tokens/tokens.css`

To regenerate tokens after making changes:

```bash
cd packages/tokens
pnpm run build
```
