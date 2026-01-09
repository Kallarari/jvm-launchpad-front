import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;   // centraliza horizontalmente
  align-items: center;       // alinha verticalmente
  gap: 2rem;
  padding: 2rem;
  width: 100%;               // ocupa toda a largura
  max-width: 800px;          // limite opcional
  margin: 0 auto;            // centraliza o container na tela
  border: 2px solid white;   /* borda vermelha */
  border-radius: 0;            /* deixa retangular */
  background: transparent;
  border-radius: 10px;
  
`;

export const Step = styled.div<{ completed?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: ${({ completed }) => (completed ? 1 : 0.6)};
`;

export const Circle = styled.div<{ completed?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  /* borda sempre visível */
  border: 2px solid ${({ completed }) => (completed ? "#e53935" : "#e53935")};
  /* fundo vermelho se concluído, transparente se não */
  background-color: ${({ completed }) => (completed ? "#e53935" : "transparent")};

  /* texto branco se concluído, cinza se não */
  color: ${({ completed }) => (completed ? "white" : "#ccc")};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #e53935;
  font-family: Roboto, sans-serif;
  `;
  
  export const Description = styled.p`
  font-family: Roboto, sans-serif;
  margin: 0;
  font-size: 0.9rem;
  color: #ffffffff;
`;