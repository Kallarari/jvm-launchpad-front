import React from 'react';
import * as S from './styles';
import headerLogo from '../../../components-squad-1/Assets/logo-assets/headerlogo.svg';

export const AuthCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <S.MainWrapper>
      <S.LogoImage
        src={headerLogo} 
        alt="JVM Launchpad" 
        style={{ width: '250px' }} 
      />
      
      <S.CardContainer>
        {children}
      </S.CardContainer>
    </S.MainWrapper>
  );
};