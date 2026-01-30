import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100px;
  z-index: 1000;
  background-color: hsla(0, 0%, 5%, 0.6); 
  backdrop-filter: blur(8px); 
  border-bottom: 1px solid hsla(0, 0%, 27%, 1);
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 48px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const LogoImage = styled.img`
  margin-left: -50px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavActions = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const LinkAction = styled.a`
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-align: right;

  &:hover {
    opacity: 1;
    color: hsl(0, 0%, 70%);
  }
`;