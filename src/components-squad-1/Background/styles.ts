import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #050505;
  z-index: -10;
  overflow: hidden; /* Corta o que vazar da tela */
  pointer-events: none;
  
  display: flex;
  justify-content: center;
  align-items: flex-start; 
`;

// 2. NOVO: Um container que simula a tela de 1920px
export const CentralizedContainer = styled.div`
  position: relative; 
  width: 100%;
  max-width: 1920px; 
  height: 100%;
  
  /* border: 1px solid green; */
`;

// Mantém o Grid
export const GridImg = styled.img`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  max-width: 1400px;
  height: auto;
  opacity: 0.6;
  object-fit: contain;
`;

//
const BaseGlow = styled.img`
  position: absolute;
  mix-blend-mode: screen;
  filter: blur(80px) brightness(1.2); 
`;

export const GlowBottomLeft = styled(BaseGlow)`
  top: 30%;
  left: -10%; 
  width: 800px; 
  opacity: 0.8;
`;

export const GlowTopRight = styled(BaseGlow)`
  bottom: 20%;
  right: -5%;
  width: 900px;
  opacity: 0.8;
`;

// LINHAS
const BaseLine = styled.img`
  position: absolute;
  opacity: 0.9; 
  mix-blend-mode: screen; 
  pointer-events: none;
`;

export const LinePrimary = styled(BaseLine)`
  top: -350px; 
  left: -350px; 
  width: 900px;
  transform: rotate(0deg); 
`;

export const LineSecondary = styled(BaseLine)`
  top: 500px;
  right: -200px;
  width: 800px;
  transform: rotate(0deg);
`;