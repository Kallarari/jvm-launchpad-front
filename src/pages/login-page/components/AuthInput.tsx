import React from 'react';
import * as S from './styles';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, ...props }) => (
  <S.FieldGroup>
    <S.FieldLabel>{label}</S.FieldLabel>
    <S.PillInput {...props} />
  </S.FieldGroup>
);