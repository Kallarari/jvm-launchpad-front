import styled from "styled-components";


export const ButtonContainer = styled.button<{ $secondary?: boolean }>`
    min-width: 97px;
    height: 39px;
    color: #fff;
    padding: 2px 8px;
    background-color: none;
    border: ${prop => prop.$secondary ? 'solid 2px #ffffff' : 'none'} ;
    position:relative;
    z-index: 1;
    white-space:normal;
    
    cursor: pointer;
    border-radius: 2px 10px;
    
    &::after{
        border-radius: 2px 10px;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: ${prop => prop.$secondary ? '#101010' : '#e63946'} ;
    }


    &::before{
        border-radius: 2px 10px;
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
        filter: blur(4px);
        background-color: ${prop => prop.$secondary ? '#ffffff' : '#e63946'} ;
        background-size: 600%;
        opacity: 0;
    }

    &:hover::before{
        opacity: 1;
    }
    
`

