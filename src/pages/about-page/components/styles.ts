import styled from 'styled-components';

interface OpenProps {
  $isOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.button<OpenProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background-color: #383838;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  border-radius: ${({ $isOpen }) => $isOpen ? '12px 12px 0 0' : '12px'};
  position: relative;
  z-index: 2;

  &:hover {
    background-color: #454545;
  }
`;

export const IconWrapper = styled.div<OpenProps>`
  display: flex;
  align-items: center;
  rotate: 180deg;
  justify-content: center;
  color: #FFFFFF;
  font-size: 30px;
  
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(90deg)'};
`;

export const ContentWrapper = styled.div<OpenProps>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  background-color: #0c0c0c;
  border-radius: 0 0 12px 12px;
  margin-top: -12px;

  position: relative;
  z-index: 1;
  border-top: 1px solid #444;
`;

export const Content = styled.div`
  overflow: hidden;
  min-height: 0;
`;

export const PaddingBox = styled.div`
  padding: 36px 24px 24px 24px;
  opacity: 1;
  transition: opacity 0.3s ease 0.05s;

  ul {
    padding-left: 16px; 
    margin: 0; 
    list-style-position: inside;
  }

  li {
    margin-bottom: 8px;
    padding-left: 1px;
    list-style-position: inside;
    color: #ddd;
  }
`;