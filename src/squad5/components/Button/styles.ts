import styled from "styled-components";


export const ButtonContainer = styled.button<{$secondary?:boolean}>`
    min-width: 97px;
    height: 39px;
    color: #fff;
    padding: 2px 8px;
    background-color: ${prop => prop.$secondary ? '#101010' : '#e63946' } ;

    border: ${prop => prop.$secondary ? 'solid 2px #ffffff' : 'none' } ;
    
    border-radius: 2px 10px;

`

