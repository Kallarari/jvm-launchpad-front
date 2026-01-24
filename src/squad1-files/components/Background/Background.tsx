import React from 'react';
import gridSvg from '../../Assets/background-assets/grid.svg';
import linesSvg from '../../Assets/background-assets/line.svg';
import glowLeftSvg from '../../Assets/background-assets/radial-top-right.svg';
import glowRightSvg from '../../Assets/background-assets/radial-bottom-left.svg';
import dotsSvg from '../../Assets/background-assets/layer dots.png'; 

import * as S from './styles';

interface BackgroundProps {
  variant?: 'landing' | 'login';
}

export const Background: React.FC<BackgroundProps> = ({ variant = 'landing' }) => {
  return (
    <S.BackgroundWrapper>
      <S.CentralizedContainer>
        
        {/* Passamos a prop $variant para os estilos saberem onde posicionar */}
        <S.GlowBottomLeft src={glowLeftSvg} alt="" $variant={variant} />
        <S.GlowTopRight src={glowRightSvg} alt="" $variant={variant} />

        <S.GridImg src={gridSvg} alt="" $variant={variant} />

        <S.LinePrimary src={linesSvg} alt="" $variant={variant} />
        <S.LineSecondary src={linesSvg} alt="" $variant={variant} />
        
        {/* Só renderiza as bolinhas se for a tela de login */}
        {variant === 'login' && <S.DotsImg src={dotsSvg} alt="" />}
        
      </S.CentralizedContainer>
    </S.BackgroundWrapper>
  );
};