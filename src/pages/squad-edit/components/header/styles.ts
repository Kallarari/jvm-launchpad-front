import styled from "styled-components";
import { theme } from "../../../../infrastructure/theme/index";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} 15rem;
  border-bottom: 1px solid #393649;
  margin-bottom: ${theme.spacing.md};

  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing.md} 5rem;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.sm};
  }

  .logo {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    font-size: ${theme.fontSizes["3xl"]};
    color: #e63946;

    strong {
      font-weight: bold;
      color: #fff;
    }
  }

  .square {
    height: 1.5rem;
    width: 1.5rem;
    rotate: 45deg;
    background-color: #e63946;
    display: inline-block;
  }
`;

export const AdminInfoComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    text-align: right;
    font-size: ${theme.fontSizes.sm};
    color: #ffffff;
  }

  .img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: ${theme.borderRadius.full};
    background-color: #d9d9d9;
    color: #000;
  }
`;
