import styled from "styled-components";

// 1. O Container externo (A barra que vai de ponta a ponta)
export const HeaderContainer = styled.header`
  position: fixed; /* Fixa no topo mesmo ao rolar */
  top: 0;
  left: 0;
  width: 100vw;
  height: 92px; /* Altura igual à da outra equipe */
  z-index: 1000;

  /* Estilo visual "Dark Glass" igual ao da referência */
  background-color: hsla(0, 0%, 5%, 0.6); 
  backdrop-filter: blur(8px); /* Adiciona um desfoque no que passa atrás (efeito vidro) */
  border-bottom: 1px solid hsla(0, 0%, 27%, 1); /* Borda sutil embaixo */
  
  display: flex;
  justify-content: center; /* Centraliza o conteúdo interno na tela */
`;

// 2. O Wrapper interno (Limita a largura para não esticar demais em telas grandes)
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1440px; /* Padrão de largura máxima */
  padding: 0 48px; /* Margem interna lateral */
  
  display: flex;
  align-items: center; /* Garante alinhamento vertical perfeito */
  justify-content: space-between; /* Joga Logo pra esq e Botões pra dir */
  
  height: 100%; /* Ocupa toda a altura da barra */
`;

// 3. Logo
export const LogoImage = styled.img`
  height: 40px; /* Ou ajuste para 44px se quiser igual ao outro time */
  object-fit: contain;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// 4. Área da direita
export const NavActions = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

// 5. Link estilizado para usar com o componente Text
export const LinkAction = styled.a`
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
  white-space: nowrap; /* Impede que o texto quebre em duas linhas */
  text-align: right;

  &:hover {
    opacity: 1;
    color: hsl(0, 0%, 70%); /* Efeito hover igual da referência */
  }
`;