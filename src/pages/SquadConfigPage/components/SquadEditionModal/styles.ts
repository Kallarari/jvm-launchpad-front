import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 116px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;

  @media (max-height: 833px) {
    top: 100px;
  }
`;

export const ModalWrapper = styled.div`
  border-radius: 8px;
  padding: 0 307px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  height: 50px;
`;

export const ModalTopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CreateSquad = styled.h1`
  color: #ffffff;
  font-family: "Goldman", sans-serif;
  font-size: 36px;
  text-align: center;
  flex: 1;

  @media (max-height: 833px) {
    font-size: 30px;
  }
`;
