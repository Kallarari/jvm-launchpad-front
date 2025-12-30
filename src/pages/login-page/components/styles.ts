import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #000;
  padding: 50px 40px;
  border-radius: 25px;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #1a1a1a;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  text-align: left;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: #f5f5f5;
  color: #000;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 8px;

  &::placeholder {
    color: #999;
  }
`;