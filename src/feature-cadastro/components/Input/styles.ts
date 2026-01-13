import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 716px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #ffffffff;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffffff;
  font-size: 1rem;

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    outline: none;
    border-color: #e53935;
  }
`;

export const Error = styled.span`
  color: #e53935;
  font-size: 0.8rem;
`;