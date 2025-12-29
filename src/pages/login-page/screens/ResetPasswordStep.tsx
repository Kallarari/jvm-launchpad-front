import { AuthCard } from '../components/AuthCard';
import { AuthInput } from '../components/AuthInput';
import { Button } from '../../../components-squad-1/Button/Button';
import styled from 'styled-components';

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 18px;
  text-align: center;
  font-family: 'Goldman', sans-serif;
  margin-bottom: 5px;
`;

export const ResetPasswordStep = () => {
  return (
    <AuthCard>
      <Title>REDEFINIR SENHA</Title>
      
      <AuthInput label="Nova Senha" type="password" placeholder="••••••••" />
      <AuthInput label="Confirmar Nova Senha" type="password" placeholder="••••••••" />
      
      <Button font="inter" size={16} textColor="white" style={{ backgroundColor: '#E31C2D', marginTop: '15px' }}>
        ATUALIZAR SENHA
      </Button>
    </AuthCard>
  );
};