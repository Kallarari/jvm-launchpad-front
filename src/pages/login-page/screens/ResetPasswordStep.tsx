import React from 'react';
import { Text } from '../../../components-squad-1/Text';
import { Button } from '../../../components-squad-1/Button/Button';
import { AuthCard } from '../components/AuthCard';
import { AuthInput } from '../components/AuthInput';

interface ResetPasswordStepProps {
  onFinish: () => void;
}

export const ResetPasswordStep: React.FC<ResetPasswordStepProps> = ({ onFinish }) => {
  return (
    <AuthCard>
      <Text as="h1" font="goldman" size={32} color="white" weight={700}>
        NOVA SENHA
      </Text>
      
      <div style={{ width: '100%', marginTop: '32px' }}>
        <AuthInput 
          label="Nova senha" 
          type="password"
          placeholder="Digite sua nova senha" 
        />
        
        <AuthInput 
          label="Confirme nova senha" 
          type="password"
          placeholder="Confirme a nova senha" 
        />
      </div>

      <Button 
        variant="rounded" 
        font="goldman"
        style={{ width: '100%', marginTop: '20px' }}
        onClick={onFinish}
      >
        CRIAR NOVA SENHA
      </Button>
    </AuthCard>
  );
};