
import styled from "styled-components";
import background from "../../../img/background.png";

export const Container = styled.div`
  width: 100%;
  height: auto; /* ocupa a tela inteira */
  background-image: url(${background});
  background-size: cover;      /* ajusta para cobrir toda a área */
  background-position: center; /* centraliza a imagem */
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* centraliza conteúdo */
  justify-content: center;
  align-items: center;

  /* responsividade */
  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;