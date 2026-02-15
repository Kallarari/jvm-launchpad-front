import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { ButtonContainer } from './styles';
import { Text } from '../Text/index'; 

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & Partial<LinkProps>;

interface ButtonProps extends ButtonTypes {
  children: ReactNode;
  variant?: 'default' | 'rounded';
  isLoading?: boolean;
  textColor?: string;
  font?: 'inter' | 'goldman';
  size?: 13 | 16 | 22 | 32;
  href?: string;
  to?: string;
}

export function Button({ 
  children, 
  variant = 'default',
  isLoading = false,
  textColor = 'white',
  font = 'inter', 
  size = 16,
  href,
  to, 
  ...props 
}: ButtonProps) {
  const Component = to ? Link : (href ? 'a' : 'button');
  
 return (
    <ButtonContainer 
      as={Component}
      to={to}
      href={href}
      $variant={variant} 
      disabled={isLoading || props.disabled}
      {...props} 
    >
      {isLoading ? (
        <Text size={size} color={textColor} font={font}>
            Carregando...
        </Text>
      ) : (
        <Text 
          as="span"
          size={size}
          color={textColor}
          weight={700}
          font={font}
        >
          {children}
        </Text>
      )}
    </ButtonContainer>
  );
}