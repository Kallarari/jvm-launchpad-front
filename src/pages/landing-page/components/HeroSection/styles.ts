import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  position: relative;
`;

export const LeftContent = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

export const TagOnline = styled.div`
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
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
  
  &:hover {
    border-color: #E63946;
    box-shadow: 0 0 20px rgba(230, 57, 70, 0.5);
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;