import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const NavButton = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  background: #e63946;
  color: #FFFFFF;
  font-family: "Goldman", sans-serif;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Info = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  font-family: "Goldman", sans-serif;
`;
