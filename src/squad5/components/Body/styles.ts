import styled from "styled-components";
import image from '../../Assets/Brackground.png'


export const BodyContainer = styled.body`
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction:column;
    width: 100%;
    min-height:100vh;
    height: 100%;

    justify-content: center;
    align-items: center;
    
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: #000000;
    background-position: center;

    font-family: "Goldman", sans-serif;
    -webkit-font-smoothing: antialiased;
    
`

export const CardsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  width: 100%;
`;