import styled from "styled-components";

export const SearchFiltersWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 32px;
    width: 100%;
`

export const SearchInputGroup = styled.div `
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  `

  export const Input = styled.input`
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;

    border-bottom: 2px solid #000000;

    font-family: 'Goldman', sans-serif;

    color: #000000ff;
    font-size: 20px;
    caret-color: #E63946;

  `
  export const Label = styled.label`
    font-size: 14px;
    color: #ffffff;
    font-family: "Goldman", sans-serif;
  `

  export const Total = styled.span`
    font-family:'Goldman',sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    white-space: nowrap;
  `

  export const SearchFieldBox = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;

    background: #ffffffff;
    border-radius: 10px;
    padding: 14px 16px;

    min-width: 450px;
  `