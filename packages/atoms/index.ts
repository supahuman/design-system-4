// TypeScript Learning: Barrel exports and component organization

export {
  Button,
  type ButtonProps,
  type ButtonVariant,
  type ButtonSize,
} from './Button';

// Default export for the entire atoms package
export { Button as default } from './Button';
