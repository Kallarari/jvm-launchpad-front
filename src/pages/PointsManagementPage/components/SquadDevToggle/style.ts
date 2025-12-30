import "../../../../squad-4-src/styles/fonts.css";
import styled from "styled-components";

interface ButtonProps {
  $active: boolean;
}

export const ToggleButton = styled.div`
  width: 200px;
  height: 74px;
  min-width: 200px;
  min-height: 74px;

  display: flex;
`;

// export const BackgroundTester = styled.button`
//   background-color: #fff;
// `;
export const BaseButton = styled.button<ButtonProps>`
  flex: 1 0 50%;
  box-sizing: border-box;

  border: ${({ $active }) =>
    $active ? "2px solid #fff" : "2px solid transparent"};

  background-color: ${({ $active }) =>
    $active ? "rgba(230, 57, 70, 1)" : "rgba(16, 16, 16, 1)"};

  color: #fff;
  font-size: 20px;
  font-family: "Goldman", sans-serif;
  cursor: pointer;
  white-space: nowrap;

  transition: background-color 0.25s ease, border-color 0.25s ease;
`;

export const DevButton = styled(BaseButton)`
  border-radius: 0px 10px 10px 0px;
`;

export const SquadButton = styled(BaseButton)`
  border-radius: 10px 0px 0px 10px;
`;
