import { AuthCard } from '../components/AuthCard';
import { AuthInput } from '../components/AuthInput';
import { Button } from '../../../components-squad-1/Button/Button';
import styled from 'styled-components';

const Description = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.4;
`;

const BackToLogin = styled.span`
  color: #E31C2D;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const ForgotPasswordStep = () => {
  return (
    <AuthCard>
      <Description>
        Insira seu e-mail cadastrado para receber as instruções de recuperação.
      </Description>
      
      <AuthInput label="E-mail" type="email" placeholder="seuemail@exemplo.com" />
      
      <Button font="inter" size={16} textColor="white" style={{ backgroundColor: '#E31C2D', marginTop: '10px' }}>
        ENVIAR LINK
      </Button>

      <BackToLogin>Voltar para o Login</BackToLogin>
    </AuthCard>
  );
};