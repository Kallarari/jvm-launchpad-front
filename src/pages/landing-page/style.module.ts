import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent; 
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;

`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 3rem;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 700;
  
  span {
    display: block;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: #A1A1AA; 
  max-width: 500px;
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

// Container para a área da direita (ícones JS/TS e Code Snippet)
export const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;