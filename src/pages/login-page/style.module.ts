import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;    /* Centralização total para o círculo azul */
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const ContentArea = styled.div`
  position: relative;
  z-index: 20; /* Fica acima de todos os backgrounds */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1; /* Fundo sempre na base */
`;