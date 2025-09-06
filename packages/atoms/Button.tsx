// TypeScript Learning: Simple React component with CSS modules
import React from 'react';
import styles from './Button.module.css';

// TypeScript: Simple union types
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

// TypeScript: Interface extending HTML button props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

// TypeScript: Function component with CSS modules
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...restProps
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
