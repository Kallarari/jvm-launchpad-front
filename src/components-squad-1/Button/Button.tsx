import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';
import { Text } from '../../components-squad-1/Text/index'; 

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends Partial<ButtonTypes> {
  children: ReactNode;
  variant?: 'default' | 'rounded';
  isLoading?: boolean;
  textColor?: string;
  font?: 'inter' | 'goldman';
  size?: 13 | 16 | 22 | 32;
  href?: string;
}

export function Button({ 
  children, 
  variant = 'default',
  isLoading = false,
  textColor = 'white',
  font = 'inter', 
  size = 16,
  href,
  ...props 
}: ButtonProps) {
  const tagType = href ? 'a' : 'button';
  
 return (
    <ButtonContainer 
      as={tagType}
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