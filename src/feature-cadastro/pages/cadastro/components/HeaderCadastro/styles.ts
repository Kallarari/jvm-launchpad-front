import styled from "styled-components";

export const Container = styled.header`
  width: 1,440px;
  height: 92px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-color: transparent;
  color: white;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; /* espaço entre ícone e texto */
`;

export const IconeRetangulo = styled.div`
  width: 30px;
  height: 30px;
  left: 303px;
  top: 28px;

  background: #E63946;
  transform: rotate(-45deg);
`;

export const Logo = styled.h1`
  width: 281px;
  height: 43px;
  top: 29.21px;
  left: 368.21px;
  font-size: 1.8rem;
  font-weight: bold;

  span {
    color: #e53935;
  }
  
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Link = styled.a`
  whidth: 93px;
  height: 13px;
  top: 39px;
  left: 905px;
  color: #ccc;
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const Button = styled.button`
  width: 97px;
  height: 39px;
  background-color: #e53935;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  left: 1037px;
  top: 26px;
  &:hover {
    background-color: #d32f2f;
  }
`;