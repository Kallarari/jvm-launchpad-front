import styled from "styled-components";
export const Container = styled.main`
  font-family: 'Goldman', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 2rem;
  color: white;
`;

export const Title = styled.h2`
  width: 100%;
  max-width: 716px;
  height: auto;
  margin-top: 1px;
  left: 227px;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;

`;

export const ButtonGroup = styled.div`
  font-family: 'Goldman', sans-serif;
  display: flex;
  gap: 2rem;
`;

export const Button = styled.button`
  font-family: 'Goldman', sans-serif;
  width: 417px;
  height: 40px;
  top: 154px;
  left: 205px;
  background: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  font-weight: bold;
  border-radius: 0px 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(34, 34, 34, 0.85);
  }

`;

