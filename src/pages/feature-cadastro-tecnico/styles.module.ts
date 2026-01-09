import styled, { createGlobalStyle } from "styled-components";
import fundo from "../../img/background.png";
import GoldmanRegular from "@/pages/feature-cadastro-tecnico/fonts/Goldman-Regular.ttf";
export const Container = styled.div`
  display: flex;    
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${fundo});
    background-size: cover;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0;
    padding: 0;
  }
    @font-face {
        font-family: 'Goldman';
        src: url(${GoldmanRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
`;



export default GlobalStyle;