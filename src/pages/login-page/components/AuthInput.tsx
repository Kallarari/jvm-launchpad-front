import React from 'react';
import { Text } from '../../../components-squad-1/Text';
import * as S from './styles';

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, type = 'text', placeholder }) => {
  return (
    <S.InputWrapper>
      <Text as="span" size={13} color="white" weight={400}>
        {label}
      </Text>
      <S.StyledInput type={type} placeholder={placeholder} />
    </S.InputWrapper>
  );
};