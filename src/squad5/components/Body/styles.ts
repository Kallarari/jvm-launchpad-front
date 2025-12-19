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
    
`