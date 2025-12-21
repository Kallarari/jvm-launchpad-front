import styled from "styled-components";


export const FooterContainer = styled.footer`
  z-index: 1000;
  position: fixed;

  left: 0;

  margin: 0;
  padding: 0;

  border-bottom: 1px solid hsla(0, 0%, 27%, 1);
  
  width: 100vw;
  height: 92px;
  bottom: -10px;
  /* top: 870px; */

  background-color: hsla(0, 0%, 5%, 0.6);

  span{
    position: relative;
    display: block;
    color: hsla(0, 0%, 100%, 1);

    font-family: Goldman;
    font-weight: 400;
    font-size: 15px;
    font-style: normal;
    
    line-height: 1;
    letter-spacing: -0.7%;
    text-align: center;
    bottom: -40px;
    

  }
  
`;
