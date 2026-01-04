import styled from "styled-components";

export const ModalBody = styled.div<{isActive?:boolean}>`
    width: 737px;
    height: 597px;

    background-color: #101010;
    border-radius: 10px;
    
    display: ${prop => prop.isActive ? 'grid' : 'none'}   ;
    grid-template-rows: auto auto auto;
    gap:1em;
    position: absolute;
`

export const ModalFooter = styled.div`
    width: 100%;
    height: 50px;
    border: 0px;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    color: #f0f0f0;
    display:flex;
    flex-direction: row;
    justify-content: safe center;
    
    gap: 10%;
    position: relative;
    
`

export const ModalHeader = styled.div`
    width: 100%;
    height: 50px;
    font-size:24px;
    font-weight: 400;
    border: 0px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    color: #f0f0f0;
    align-content: end;
    position:relative;
`

export const ModalWrapperContent = styled.div`
    width: 100%;
    height: 394;
    display:flex;
    flex-direction: row;

    justify-content: start;
    position:relative;

`

export const ModalContent = styled.div`
    height:100%;
    width:50%;
    display:flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: space-between;
    margin:0px;
    border:0px;
    gap: 0.9em;

`
