import styled from "styled-components";
import "../../../../squad-4-src/styles/fonts.css"
import { Icon } from "@iconify/react";
import { theme } from "../../../../infrastructure";
import type { ButtonSize } from "./interface";

interface StyledButtonProps {
  size: ButtonSize;
}

export const StyledIcon = styled(Icon)`
  width: 53px;
  height: 53px
`;

export const StyledButton = styled.button<StyledButtonProps>`
  
  background-color: ${theme.colors.danger};
  color: ${theme.colors.white};

  min-width: ${({ size }) => (size === "sm" ? "161px" : "223px")};
  width: auto;
  height: ${({ size }) => (size === "sm" ? "46px" : "74px")};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  margin: auto;
  cursor: pointer;

  border: none;
  border-radius: ${theme.borderRadius.lg};

  font-family: 'Goldman', sans-serif;
  font-size: ${({ size }) => (size === "sm" ? "16px" : "20px")}; 
  font-weight: 400;

  * {
    pointer-events: none;
    color: inherit;
    line-height: 1;
  }
`;
