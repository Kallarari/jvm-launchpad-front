import React from 'react';
import * as S from '../components/styles';
import { AuthInput } from '../components/AuthInput';
import { Button } from '../../../components-squad-1/Button/Button';

export const LoginStep = () => {
  return (
    <S.LoginCardBox>
      <AuthInput label="Usuário" type="text" placeholder="Digite seu usuário" />
      <AuthInput label="Senha" type="password" placeholder="••••••••" />
      
      <S.ForgotLink>ESQUECI MINHA SENHA</S.ForgotLink>
      
<Button 
  font="goldman" 
  size={16} 
  textColor="white" 
  style={{ 
    backgroundColor: '#E31C2D', 
    height: '56px',       /* Mesma altura do PillInput */
    borderRadius: '14px', /* Mesmo arredondamento */
    width: '100%',        /* Garante que ocupe a largura total do card */
    marginTop: '10px' 
  }}
>
  FAZER LOGIN
</Button>

      <div style={{ textAlign: 'center', marginTop: '24px', color: 'white', fontSize: '12px', fontFamily: 'Goldman' }}>
        Ainda não tem sua conta? <span style={{ color: '#E31C2D', fontWeight: 'bold', cursor: 'pointer' }}>Cadastre-se</span>
      </div>
    </S.LoginCardBox>
  );
};