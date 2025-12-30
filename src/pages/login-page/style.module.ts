import styled from 'styled-components';

export const MainContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  overflow: hidden;
  z-index: 999;
`;

export const ContentArea = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;