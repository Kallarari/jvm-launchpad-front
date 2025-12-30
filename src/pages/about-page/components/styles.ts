import styled from 'styled-components';

interface OpenProps {
  $isOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.button<OpenProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background-color: #383838; /* Cinza do cabeçalho */
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: left;

  /* Lógica da borda: Se aberto, reta embaixo. Se fechado, redonda. */
  border-radius: ${({ $isOpen }) => $isOpen ? '12px 12px 0 0' : '12px'};

  &:hover {
    background-color: #454545; /* Ligeiramente mais claro no hover */
  }
`;

export const IconWrapper = styled.div<OpenProps>`
  display: flex;
  align-items: center;
  rotate: 180deg;
  justify-content: center;
  color: #FFFFFF;
  font-size: 30px;
  transition: transform 0.3s ease;

  /* Gira a seta */
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(90deg)'};
`;

export const Content = styled.div`
  background-color: #0c0c0c; /* Fundo preto do conteúdo */
  padding: 24px;
  border-radius: 0 0 12px 12px; /* Arredonda só embaixo */
  border-top: 1px solid #444; /* Separação sutil */
  
  /* Animação suave */
  animation: slideDown 0.3s ease-in-out;

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;