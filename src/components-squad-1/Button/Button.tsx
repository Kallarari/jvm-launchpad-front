import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

// Tipagem do componente
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'rounded';
}

export function Button({ 
  children, 
  variant = 'default',
  ...props 
}: ButtonProps) {
  return (
    <ButtonContainer 
      $variant={variant} 
      {...props} 
    >
      {children}
    </ButtonContainer>
  );
}