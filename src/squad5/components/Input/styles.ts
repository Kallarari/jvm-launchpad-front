import styled from "styled-components";


export const InputContainer = styled.div`
    min-width: 306px;
    height: 68px;
    
    display: flex;
    flex-direction:column;
    gap: 10px;
    margin: 0px;
    border:0px;
   

    justify-content:safe center;

`

export const InputText = styled.input`
    border: solid 1px #E3E8EE;
    border-radius: 4px;
    padding: 8px;
    background-color: #FFFFFF;
    color: #000000;
    height: 36px;

    width: 100%;
    max-width: 306px;
`

export const InputTitle = styled.label`
    font-size: 16px;
    width: 100%;

    color: #f0f0f0;
    font-family: Goldman;

`

export const HelpText = styled.label`
    font-size: 16px;
    width: 100%;

    color: #CD3D64;
    font-family: Goldman;
    

`

export const InputFileWrapper = styled.input`
    position: absolute;
    visibility: hidden;
`