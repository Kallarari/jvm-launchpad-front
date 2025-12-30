import styled, { css } from 'styled-components';
interface VariantProps {
  $variant?: 'landing' | 'login';
}

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000f8;
  z-index: -10;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
`;

export const CentralizedContainer = styled.div`
  position: relative; 
  width: 100%;
  max-width: 1920px; 
  height: 100%;
`;

export const GridImg = styled.img<VariantProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  max-width: 1400px;
  height: auto;
  opacity: 0.6;
  object-fit: contain;

  top: ${props => props.$variant === 'login' ? '15%' : '10%'};
`;

const BaseGlow = styled.img`
  position: absolute;
  mix-blend-mode: screen;
  filter: blur(80px) brightness(1.2); 
`;

export const GlowBottomLeft = styled(BaseGlow)<VariantProps>`
  width: 800px; 
  opacity: 0.8;

  ${props => props.$variant === 'login' ? css`
     top: 30%;
     left: 0%;
  ` : css`
     top: 30%;
     left: 0%; 
  `}
`;

export const GlowTopRight = styled(BaseGlow)<VariantProps>`
  width: 900px;
  opacity: 0.8;

  ${props => props.$variant === 'login' ? css`
    bottom: 20%;
    right: -5%;
    top: auto;
  ` : css`
    bottom: 20%;
    right: -5%;
    top: auto;
  `}
`;

const BaseLine = styled.img`
  position: absolute;
  opacity: 0.9; 
  mix-blend-mode: screen; 
  pointer-events: none;
`;

export const LinePrimary = styled(BaseLine)<VariantProps>`
  width: 900px;
  transform: rotate(0deg); 

  ${props => props.$variant === 'login' ? css`
    top: -350px;
    left: -350px;
    transform: rotate(0deg);
  ` : css`
    top: -350px; 
    left: -350px;
    transform: rotate(0deg);
  `}
`;

export const LineSecondary = styled(BaseLine)<VariantProps>`
  width: 800px;

  ${props => props.$variant === 'login' ? css`
    top: 200px;
    bottom: auto;
    right: -300px;
    transform: rotate(0deg);
  ` : css`
    /* Posição LANDING (Original) */
    top: 500px;
    bottom: auto;
    right: -300px;
    transform: rotate(0deg);
  `}
`;

export const DotsImg = styled.img`
  position: absolute;
  bottom: 10%;
  right: 30%; 
  width: 200px;
  opacity: 0.8;
  mix-blend-mode: screen;
`;