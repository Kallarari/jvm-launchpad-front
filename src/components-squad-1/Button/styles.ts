import styled, { css } from 'styled-components';
import { theme } from '../../infrastructure'; // O import está aqui

interface ButtonContainerProps {
  $variant?: 'default' | 'rounded';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Aqui usamos o 'theme' do import */
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  
  width: 100%; 
  background-color: ${theme.colors.danger};
  border: none;
  
  /* O cursor e transições que estavam antes */
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;
  text-transform: uppercase; 

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* CORREÇÃO AQUI EMBAIXO: */
  /* Removemos ', theme' dos parênteses. Agora ele usa o theme importado lá em cima. */
  ${({ $variant }) => {
    if ($variant === 'rounded') {
      return css`
        border-radius: 50px; 
      `;
    }
    // Shape padrão
    return css`
      border-radius: 16px 0 16px 0; 
    `;
  }}
`;