import styled from "styled-components";
import { theme } from "../../../../infrastructure/theme/index";

export const CardComponent = styled.div`
  background: #2c2a38;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ActionsComponent = styled.div`
  display: flex;
  gap: 0.625rem;

  button {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.sm};
    font-size: ${theme.fontSizes.xs};
    cursor: pointer;
    border: none;
    color: white;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .btn-remove {
    background: #e63946;
  }

  .btn-leader {
    background: #45444c;
  }

  .active-leader {
    background: #e63946;
    font-weight: bold;
    box-shadow: ${theme.shadows.sm};
  }

  a {
    display: flex;
    align-items: center;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    background-color: #ffffff;
    color: #1f1f2b;
    border-radius: 0 ${theme.borderRadius.lg} 0 ${theme.borderRadius.lg};
    text-decoration: none;
    font-size: ${theme.fontSizes.xs};
  }
`;
