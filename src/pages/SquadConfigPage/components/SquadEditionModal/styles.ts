import styled from "styled-components";

interface VisibleProps{
  $visible: boolean
}

export const Overlay = styled.div<VisibleProps>`
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

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.45s ease;

  @media (max-height: 833px) {
    top: 100px;
  }
`;

export const ModalWrapper = styled.div<VisibleProps>`
  border-radius: 8px;
  padding: 0 307px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  height: 50px;

  transform: translateY(${({ $visible }) => ($visible ? "0" : "20px")});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: all 0.45s ease;
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
