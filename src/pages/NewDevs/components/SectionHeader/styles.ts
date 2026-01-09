import styled from "styled-components";

export const NavbarWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap:10px ;
`

export const ActionButton = styled.button`
  width: 220px;
  height: 74px;
  border-radius: 10px;
  background: #E63946;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Goldman', sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`
export const PageTitle = styled.h1`
  font-family: 'Goldman', sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;

  flex: 1;
  white-space: nowrap;
`