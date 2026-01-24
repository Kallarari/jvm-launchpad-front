import React from 'react';
import { Button } from '../../../squad1-files/components/Button/Button';
import { AuthCard } from '../components/AuthCard';
import { AuthInput } from '../components/AuthInput';

interface ForgotPasswordStepProps {
  onBackToLogin: () => void;
  onSendEmail: () => void;
}

export const ForgotPasswordStep: React.FC<ForgotPasswordStepProps> = ({ 
  onSendEmail 
}) => {
  return (
    <AuthCard>
      <div style={{ width: '100%', marginTop: '10px' }}>
        <AuthInput 
          label="E-mail" 
          placeholder="Digite seu e-mail cadastrado" 
        />
        
        <div style={{ marginBottom: '30px' }} /> 
      </div>

      <Button 
        variant="rounded" 
        font="goldman"
        style={{ width: '100%' }}
        onClick={onSendEmail}
      >
        ENVIAR LINK
      </Button>
    </AuthCard>
  );
};