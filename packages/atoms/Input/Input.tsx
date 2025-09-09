/// <reference lib="dom" />
import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.ComponentProps<'input'> {
  variant?: 'default' | 'error';
  // Accessibility props
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling';
}

const Input: React.FC<InputProps> = ({
  className,
  variant = 'default',
  ...props
}) => {
  return (
    <input
      className={`${styles.input} ${styles[variant]} ${className || ''}`}
      {...props}
    />
  );
};

Input.displayName = 'Input';

export default Input;
