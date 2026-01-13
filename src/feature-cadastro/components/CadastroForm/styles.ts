import styled from "styled-components";

export const CadastroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  
`;

export const Form = styled.form`
  width: 100%;
  max-width: 716px;
  height: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #ffffffff;
`;

export const SubmitButton = styled.button`
  grid-column: span 2; /* botão ocupa as duas colunas */
  margin-top: 1rem;
  padding: 0.75rem;

  border: none;
  border-radius: 6px;

  background: #e53935;
  color: #fff;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;