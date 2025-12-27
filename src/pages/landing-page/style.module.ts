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
  flex-direction: column; /* Um bloco abaixo do outro (Hero em cima, Bottom embaixo) */
  gap: 3rem; /* Aumentei o espaço para separar bem as seções, como no design */

  /* Margem no topo para centralizar verticalmente se a tela for grande */
  margin-top: 8rem; 
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-top: 3rem;
    gap: 4rem;
  }
`;

// AQUI ESTAVA O ERRO VISUAL: O Hero precisa ser GRID ou ROW para ficar lado a lado
export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide: 50% Texto | 50% Ícones */
  align-items: center;
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* Vira coluna em tablets/celulares */
    text-align: center;
    justify-items: center;
  }
`;

// Wrapper para o texto (Título, Descrição, Botões)
// Se você não tiver esse wrapper no index.tsx, o grid pode quebrar. 
// O ideal é que Title, Description e ButtonGroup estejam dentro de uma <div>
export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 900px) {
    align-items: center; /* Centraliza botões no mobile */
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 700;
  
  span {
    display: block;
    color: #FF0036; /* Assumindo que essa é a cor de destaque */
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
  justify-content: flex-end; /* Empurra os ícones para a direita */
  align-items: center;
  
  /* Se forem os ícones flutuantes (JS/TS), isso ajuda a organizar */
  gap: 20px; 

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;