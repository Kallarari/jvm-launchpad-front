import React from 'react';
import { Text } from '../../../components-squad-1/Text';
import { Button } from '../../../components-squad-1/Button/Button';
import { AuthCard } from '../components/AuthCard';
import { AuthInput } from '../components/AuthInput';

interface ForgotPasswordStepProps {
  onBackToLogin: () => void;
  onSendEmail: () => void;
}

export const ForgotPasswordStep: React.FC<ForgotPasswordStepProps> = ({ 
  onBackToLogin, 
  onSendEmail 
}) => {
  return (
    <AuthCard>
      <Text as="h1" font="goldman" size={32} color="white" weight={700} style={{ textAlign: 'center' }}>
        RECUPERAR SENHA
      </Text>
      
      <div style={{ width: '100%', marginTop: '32px' }}>
        <AuthInput 
          label="E-mail" 
          placeholder="Digite seu e-mail cadastrado" 
        />
        
        <div style={{ marginTop: '10px', marginBottom: '30px' }}>
          <Text as="span" font="inter" size={13} color="white">
            Lembrou a senha?{' '}
          </Text>
          <Text 
            as="span" 
            font="inter" 
            size={13} 
            color="white" 
            weight={700} 
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={onBackToLogin}
          >
            VOLTAR
          </Text>
        </div>
      </div>

      <Button 
        variant="rounded" 
        font="goldman"
        style={{ width: '100%' }}
        onClick={onSendEmail}
      >
        ENVIAR LINK
      </Button>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Text as="span" font="inter" size={13} color="white">
          Você receberá um link de redefinição no e-mail informado.
        </Text>
      </div>
    </AuthCard>
  );
};