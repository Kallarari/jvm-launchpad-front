import styled from "styled-components";

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
  gap: 16px; 
  align-items: flex-start;
  margin-top: 24px;
  margin-left: 20px;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`;

export const LinkButton = styled.button`
  background-color: #E63946;
  color: #FFFFFF;
  
  font-family: 'Goldman', Cursive;
  font-weight: 200; 
  font-size: 14px;
  border: none;
  letter-spacing: 1px;
  border-radius: 0 16px 0 16px;
  padding: 12px 40px;
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(230, 57, 70, 0.5);
  }
`;

/* Área da Direita */
export const CodeSectionWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 40px;
  margin-right: 60px;
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
    filter: drop-shadow(0 4px 5px rgba(253, 251, 251, 0.3));

  &:hover {
    color: #FF0036;
    transform: translateY(-2px);
  }
`;