import React from 'react';
import * as S from './style.module';
import { Background } from "../../components-squad-1/Background"; // O componente oficial que você citou
import { LoginStep } from './screens/LoginStep';

const LoginPage: React.FC = () => {
  return (
    <S.MainContainer>
      <Background /> 

      <S.ContentArea>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#E31C2D', transform: 'rotate(45deg)' }} />
          <span style={{ color: 'white', fontFamily: 'Goldman', fontSize: '1.8rem', textTransform: 'uppercase' }}>
            JVM Launchpad
          </span>
        </div>

        <LoginStep />
      </S.ContentArea>
    </S.MainContainer>
  );
};

export default LoginPage;