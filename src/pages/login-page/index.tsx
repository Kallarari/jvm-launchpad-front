import { useState } from 'react';
import { Container, Content } from './style.module';
import { LoginStep } from './screens/LoginStep';
import { ForgotPasswordStep } from './screens/ForgotPasswordStep';
import { ResetPasswordStep } from './screens/ResetPasswordStep';

const LoginPage = () => {
  const [step, setStep] = useState<'login' | 'forgot' | 'reset'>('login');

  return (
    <Container>
      <Content>
        {step === 'login' && (
          <LoginStep onForgotPassword={() => setStep('forgot')} />
        )}
        
        {step === 'forgot' && (
          <ForgotPasswordStep 
            onBackToLogin={() => setStep('login')} 
            // Temporário: simula o recebimento do e-mail
            onSendEmail={() => setStep('reset')} 
          />
        )}

        {step === 'reset' && (
          <ResetPasswordStep onFinish={() => setStep('login')} />
        )}
      </Content>
    </Container>
  );
};

export default LoginPage;