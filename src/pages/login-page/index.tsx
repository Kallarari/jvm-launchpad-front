import { useState } from 'react';
import * as S from './style.module';

import { Background } from '../../components-squad-1/Background';

import { LoginStep } from './screens/LoginStep';
import { ForgotPasswordStep } from './screens/ForgotPasswordStep';
import { ResetPasswordStep } from './screens/ResetPasswordStep';

const LoginPage = () => {
  const [step, setStep] = useState<'login' | 'forgot' | 'reset'>('login');

  return (
    <S.MainContainer>
      <Background variant='login'/>
      
      <S.ContentArea>
        {step === 'login' && (
          <LoginStep onForgotPassword={() => setStep('forgot')} />
        )}
        
        {step === 'forgot' && (
          <ForgotPasswordStep 
            onBackToLogin={() => setStep('login')} 
            onSendEmail={() => setStep('reset')} 
          />
        )}

        {step === 'reset' && (
          <ResetPasswordStep onFinish={() => setStep('login')} />
        )}
      </S.ContentArea>
    </S.MainContainer>
  );
};

export default LoginPage;