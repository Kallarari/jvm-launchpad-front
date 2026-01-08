import styled from "styled-components";
import { theme } from "../../../../infrastructure/theme/index";

export const RecommendationCardComponent = styled.div<{
  $isDisabled?: boolean;
}>`
  border-radius: ${theme.borderRadius.lg};
  width: 100%;
  background-color: #1f1f2b;

  opacity: ${(props) => (props.$isDisabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;

  .header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 0;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid #393649;

    h3 {
      font-size: ${theme.fontSizes.xl};
      color: #ffffff;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xl};
    }

    button {
      background: ${(props) => (props.$isDisabled ? "#45444C" : "#E63946")};
      cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
      color: white;
      border: none;
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      border-radius: ${theme.borderRadius.md};
      font-weight: bold;
      transition: opacity 0.2s;

      &:hover {
        opacity: ${(props) => (props.$isDisabled ? 1 : 0.8)};
      }
    }

    a {
      display: flex;
      align-items: center;
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      background-color: #ffffff;
      color: #1f1f2b;
      border-radius: 0 ${theme.borderRadius.lg} 0 ${theme.borderRadius.lg};
      text-decoration: none;
    }
  }
`;

export const StatsGridComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  align-items: stretch;
  background-color: #1f1f2b;
  border-radius: 0 0 ${theme.borderRadius.lg} ${theme.borderRadius.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md};
  }

  div {
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:not(:first-child) {
      border-left: 1px solid #393649;

      @media (max-width: ${theme.breakpoints.md}) {
        border-left: none;
      }
    }

    span {
      display: block;
      font-size: ${theme.fontSizes.xs};
      color: #757488;
      margin-bottom: ${theme.spacing.xs};
    }

    p {
      font-size: ${theme.fontSizes.md};
      color: #fff;
      font-weight: 500;
      margin: 0;
    }
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing.md};
    padding-left: ${theme.spacing.lg};
    justify-content: flex-end;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-column: span 2;
      justify-content: center;
      padding-top: ${theme.spacing.sm};
      border-top: 1px solid #393649;
    }

    a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: ${theme.fontSizes.sm};
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #e63946;
      }
    }
  }
`;
