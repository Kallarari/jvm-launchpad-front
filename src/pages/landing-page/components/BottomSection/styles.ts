import styled from "styled-components";
// Certifique-se que o caminho do Button está certo
import { Button } from "../../../../components-squad-1/Button/Button";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const LinkButton = styled(Button)`
  && {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    text-align: left;
    padding-left: 0;
  }
`;

export const CodeSectionWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 40px; 
`;

export const CodeImage = styled.img`
  display: block;
  width: 90%;
  max-width: 500px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.5));
`;

export const StartTab = styled.button`
  position: absolute;
  top: -15px; 
  right: -10px;
  z-index: 10;
  height: 60px;
  padding: 0 60px;
  background-color: #0c1015; 
  color: #fff;
  font-family: 'Goldman', cursive; 
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: 3px solid #ffffff;
  border-radius: 0 16px 0 16px; 
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #FF0036;
    transform: translateY(-2px);
  }
`;