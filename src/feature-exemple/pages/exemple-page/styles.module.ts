import styled from 'styled-components';
import { theme } from '../../../infrastructure';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.light};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: bold;
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing.lg};
  font-family: ${theme.fonts.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  max-width: 800px;
  width: 100%;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.secondary};
  line-height: 1.6;
`;

