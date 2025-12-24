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

  width: ${({ size }) => (size === "sm" ? "161px" : "223px")};
  height: 74px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};

  margin: auto;
  cursor: pointer;

  border: none;
  border-radius: ${theme.borderRadius.lg};

  font-family: 'Goldman', sans-serif;
  font-size: 20px; 
  font-weight: 400;

  * {
    pointer-events: none;
    color: inherit;
    line-height: 1;
  }
`;
