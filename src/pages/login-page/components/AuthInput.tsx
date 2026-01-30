import React, { useState } from 'react';
import { Text } from '../../../squad1-files/components/Text';
import * as S from './styles';

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, type = 'text', placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';
  const inputType = isPasswordType ? (showPassword ? 'text' : 'password') : type;

  return (
    <S.InputWrapper>
      <Text as="span" font="goldman" size={22} color="white" weight={400}>
        {label}
      </Text>
      
      <S.InputGroup>
        <S.StyledInput 
          type={inputType} 
          placeholder={placeholder} 
        />
        
        {isPasswordType && (
          <S.ToggleButton 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </S.ToggleButton>
        )}
      </S.InputGroup>
    </S.InputWrapper>
  );
};