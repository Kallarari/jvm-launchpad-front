import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent; 
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 8rem; 
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-top: 3rem;
    gap: 4rem;
  }
`;


export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
`;

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 700;
  
  span {
    display: block;
    color: #FF0036;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: #A1A1AA; 
  max-width: 500px;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px; 

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;