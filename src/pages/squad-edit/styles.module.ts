import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/background.png";
import { theme } from "../../infrastructure/theme/index";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Goldman", sans-serif;
    font-weight: 400;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Goldman", sans-serif;
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-size: 100% 100%;
  color: #fff;
  padding: 0 0 ${theme.spacing.xl};
`;

export const TitleSectionComponent = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: ${theme.spacing.lg} 15rem;
  font-size: ${theme.fontSizes["2xl"]};
  font-weight: bold;

  @media (max-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing.lg} 5rem;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    flex-direction: column;
    gap: ${theme.spacing.md};

    .back {
      width: 5rem;
      height: 2rem;
      line-height: 2rem;
      font-size: 2rem;
    }

    .confirmed {
      width: 5rem;
      height: 2rem;
      line-height: 2rem;
      font-size: 2rem;
    }
  }

  .back {
    cursor: pointer;
    background-color: #e63946;
    width: 10rem;
    height: 4rem;
    border-radius: ${theme.borderRadius.sm};
    text-align: center;
    line-height: 4rem;
  }

  .title {
    flex-grow: 1;
    font-size: ${theme.fontSizes["4xl"]};
    color: #fff;
    text-align: center;
  }

  .confirmed {
    background-color: #e63946;
    font-size: ${theme.fontSizes.md};
    width: 10rem;
    height: 4rem;
    color: white;
    border: none;
    border-radius: ${theme.borderRadius.sm};
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const FormSectionComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  margin: 0 auto;
  width: 100%;
  padding: 0 15rem;

  @media (max-width: ${theme.breakpoints.xl}) {
    padding: 0 5rem;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

export const MembersListComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: ${theme.spacing.lg};
`;

export const SearchInputComponent = styled.div`
  margin: ${theme.spacing.lg} 0;

  input {
    width: 40%;
    padding: 0.875rem;
    font-size: ${theme.fontSizes.md};
    background: #fff;
    border: 1px solid #393649;
    border-radius: ${theme.borderRadius.md};
    color: #2c2a38;
    outline: none;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 80%;
    }

    &:focus {
      border-color: #e63946;
    }
  }
`;

export const RecommendationSectionComponent = styled.section`
  margin-top: ${theme.spacing["2xl"]};
  border-top: 1px solid #393649;
  padding-top: ${theme.spacing.lg};
  text-align: center;
`;

export const ListUserComponent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 90vh;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  padding: 0 15rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    padding: 0 5rem;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;
