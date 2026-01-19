import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 800px; 
  margin-top: 3rem;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentPr = styled.div`
  grid-column: 1 / -1; /* ocupa todas as colunas do grid */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px; 
  > div {
    width: 50%;
  }
`;

export const InfoTest = styled.a`

  font-family: 'Goldman', sans-serif;
  margin-top: 1rem;
  color: #FFFFFF;
  text-decoration: underline;
  text-decoration-thickness: 0.5px;/* espessura da linha */
  text-underline-offset: 0.2rem; /* distancia da linha em relação ao texto */
  font-size: 1rem;
  cursor: pointer;
  margin:4px;
`;

export const Submit = styled.button`
  font-family: 'Goldman', sans-serif;
  background: #E63946;
  border: none;
  color: #FFFFFF;
  border-radius: 2px 10px;
  margin-top: 5rem;
  margin-bottom: 3rem;
  padding: 0.75rem 1.5rem;
  width: 100%;
  max-width: 203px;
  font-size: 1rem;
  &:hover {
    opacity: 0.9;
  }
`;
