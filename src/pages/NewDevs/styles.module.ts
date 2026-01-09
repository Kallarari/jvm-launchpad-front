import styled from "styled-components";

  export const ContainerPrincipal = styled.main`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  `

  export const NavigationSection = styled.div`
    margin: 25px 0;
    width: 100%;
    max-width: 900px;
  `

  export const SearchWrapper = styled.div`
    margin-bottom:34px;
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    padding: 0 20px;
  `

  export const CardList = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 900px;
    margin-bottom: 40px;

    &::-webkit-scrollbar{
      background: transparent;
    }

  `


