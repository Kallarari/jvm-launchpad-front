import styled from 'styled-components';

interface CardContainerProps {
  backgroundUrl?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 249px;
  height: 321px;
  border-radius: 10px;
  background: ${({ backgroundUrl }) =>
    backgroundUrl
      ? `url(${backgroundUrl}) center/cover no-repeat`
      : '#D9D9D9'};
  box-shadow: 
    0px 0px 4px 0px #FFFFFF40,
    0px 0px 0px 0px #00000033;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;