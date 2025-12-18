import styled from 'styled-components';
import { theme } from '../../../infrastructure';

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.light};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.secondary};
`;

export const ComponentTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0;
  font-family: ${theme.fonts.primary};
`;

export const ComponentDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`;

export const ComponentButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.md};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.dark};
  }

  &:active {
    transform: scale(0.98);
  }
`;

