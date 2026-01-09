import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 716px;
`;

export const Label = styled.label`
    /* Label */
  width: 306px;
  height: 16px;

  /* Small / 600 */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /*   Gray / 500 */
  color: #697386;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffffff;
  font-size: 1rem;

  &::placeholder {
    color: #697386;
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