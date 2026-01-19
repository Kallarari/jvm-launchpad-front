import styled from "styled-components";
export const HeaderContent = styled.div`
    font-family: 'Goldman', sans-serif;
    font-size: 2rem;
    color: #FFFFFF;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #454545;
    letter-spacing: -2px;
    height: 5rem;

`;

export const TitleHeader = styled.h1`
    
    font-weight: 400;
    font-style: normal;
    color: #E63946;
    font-size: 2.2rem;
    display: flex;
    align-items: center;
`;

export const TextWhite = styled.span`
    color: #FFFFFF;
    margin-right: 6px;
`;

export const PerfilInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    font-weight: 500;
        
`;

export const ImgPerfil = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #FFFFFF;
`;

export const ButtonUpdatePerfil = styled.button`
    font-family: 'Goldman', sans-serif;
    font-size: 15px;
    color: #FFFFFF;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    text-decoration: underline;
`;

export const UserName = styled.span`
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: -0.5px;
`;

export const RetangleIcon = styled.div`
  width: 2rem;
  height: 2rem;
  left: 303px;
  top: 28px;
  background: #E63946;
  transform: rotate(-45deg);
  margin-right: 25px;
`;