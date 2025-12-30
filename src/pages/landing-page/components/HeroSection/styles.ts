import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  position: relative;
`;

export const LeftContent = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  width: 100%;
`;

// 2. O segredo para a borda ficar colada no texto
export const JvmTitle = styled.div`
  width: fit-content; 
  display: block;
  
  line-height: 0.9;
  margin-right: -5px;
  margin-bottom: 5px;
  color: #E63946;

  filter: drop-shadow(0 0 3px rgba(230, 57, 70, 0.8));
  padding: 0 5px; 
`;

export const TagOnline = styled.div`
  background-color: #141414ff;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #E63946;
  border-radius: 50px;
  color: #E63946;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  width: fit-content;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #E63946;
    border-radius: 50%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 40px;
`;

export const TechIcon = styled.div`
  width: 180px; 
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
  
  &:hover {
    border-color: #E63946;
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;