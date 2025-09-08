// TypeScript Learning: Barrel exports and component organization

export {
  Button,
  type ButtonProps,
  type ButtonVariant,
  type ButtonSize,
} from './Button/Button';

export { default as Input, type InputProps } from './Input/Input';

// Default export for the entire atoms package
export { Button as default } from './Button/Button';
