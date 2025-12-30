import styled, { css } from 'styled-components';
import { theme } from '../../infrastructure';

interface ButtonContainerProps {
  $variant?: 'default' | 'rounded';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px ${theme.spacing.lg};
  width: 100%; 
  background-color: ${theme.colors.danger};
  border: none;
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;
  text-transform: uppercase; 
  text-decoration: none;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ $variant }) => {
    if ($variant === 'rounded') {
      return css`
        border-radius: 10px; 
      `;
    }

    return css`
      border-radius: 2px 16px 0 16px;
    `; 
  }}
`;