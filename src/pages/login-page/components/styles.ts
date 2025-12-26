import styled from 'styled-components';

export const LoginCardBox = styled.div`
  width: 100%;
  max-width: 440px;
  background-color: #000000;
  border-radius: 32px; /* Arredondamento conforme o Figma */
  padding: 56px 56px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 10;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const FieldLabel = styled.label`
  color: #FFFFFF;
  font-family: 'Goldman', sans-serif; /* Fonte da squad */
  font-size: 14px;
  margin-left: 12px;
`;

export const PillInput = styled.input`
  width: 85%;
  height: 56px;
  background-color: #F1F1F1;
  border: 2px solid transparent;
  border-radius: 14px; /* Formato pílula */
  padding: 0 24px;
  font-family: 'Goldman', sans-serif;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #A1A1AA;
  }

  &:focus {
    background-color: #FFFFFF;
    border-color: #00FF00; /* Brilho de foco conforme protótipo */
  }
`;

export const ForgotLink = styled.span`
  color: #FFFFFF;
  font-family: 'Goldman', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: right;
  cursor: pointer;
  margin-top: -12px;
  margin-bottom: 32px;
  letter-spacing: 0.5px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;