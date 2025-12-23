import styled, { css } from 'styled-components';
import { theme } from '../../infrastructure';

// Definimos a tipagem das props exclusivas do estilo
interface ButtonContainerProps {
  $variant?: 'default' | 'rounded'; // 'rounded' seria para o caso do Login
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
  width: 100%; 
  
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.md};
  font-weight: 700; /* Bold */
  text-transform: uppercase;
  
  background-color: ${theme.colors.danger};
  color: ${theme.colors.white || '#ff0000ff'};
  border: none;
  
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;

  ${({ $variant, theme }) => {
    if ($variant === 'rounded') {
      return css`
        border-radius: 50px; 
      `;
    }
    // Estilo padrão (pode ser o shape "folha" ou borda padrão do seu design)
    return css`
      border-radius: ${theme.borderRadius?.md || '8px'}; 
         border-radius: 16px 0 16px 0; 
    `;
  }}
`;