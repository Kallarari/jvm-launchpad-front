// Select/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 716px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`;

export const Select = styled.select`
  width: 100%;
  max-width: 716px;
  padding: 8px;
  border: 1px solid #fdfdfdff;
  border-radius: 6px;
  background-color: #ffffffff;
  
  
`;

export const Error = styled.span`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 4px;
`;

