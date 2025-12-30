import React from 'react';
import * as S from './styles';
import headerLogo from '../../../components-squad-1/Assets/logo-assets/headerlogo.svg';

export const AuthCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <S.CardContainer>
      <img 
        src={headerLogo} 
        alt="JVM Launchpad" 
        style={{ width: '220px', marginBottom: '35px' }} 
      />
      {children}
    </S.CardContainer>
  );
};