import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const ContentArea = styled.div`
  position: relative;
  z-index: 20; /* Card acima das luzes do componente de background */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;