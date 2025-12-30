import React from 'react';
import { Text } from '../../../components-squad-1/Text';
import { Button } from '../../../components-squad-1/Button/Button';
import { AuthCard } from '../components/AuthCard';
import { AuthInput } from '../components/AuthInput';

interface LoginStepProps {
  onForgotPassword: () => void;
}

export const LoginStep: React.FC<LoginStepProps> = ({ onForgotPassword }) => {
  return (
    <AuthCard>
      <div style={{ width: '100%', marginTop: '10px' }}>
        <AuthInput 
          label="Usuário" 
          placeholder="Digite seu usuário" 
        />
        
        <AuthInput 
          label="Senha" 
          type="password" 
          placeholder="Digite sua senha" 
        />
        
        <div style={{ textAlign: 'right', marginTop: '-10px', marginBottom: '30px' }}>
          <span 
            onClick={onForgotPassword}
            style={{ cursor: 'pointer' }}
          >
            <Text as="span" font="inter" size={13} color="white" weight={400}>
              ESQUECI MINHA SENHA
            </Text>
          </span>
        </div>
      </div>

      <Button 
        variant="rounded" 
        font="goldman"
        style={{ width: '100%' }}
      >
        FAZER LOGIN
      </Button>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Text as="span" font="inter" size={16} color="white">
          Ainda não tem sua conta?{' '}
        </Text>
        <Text 
          as="span" 
          font="inter" 
          size={13} 
          color="red" 
          style={{ cursor: 'pointer' }}
        >
          Cadastre-se
        </Text>
      </div>
    </AuthCard>
  );
};