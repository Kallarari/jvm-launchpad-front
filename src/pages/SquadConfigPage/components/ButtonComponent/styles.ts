import styled from "styled-components";
import "../../../../squad-4-src/styles/fonts.css";
import { Icon } from "@iconify/react";
import { theme } from "../../../../infrastructure";
import type { ButtonSize } from "./interface";

interface StyledButtonProps {
  $widthSize: ButtonSize;
  $heightSize: ButtonSize;
}

export const StyledIcon = styled(Icon)`
  width: 53px;
  height: 53px;

  @media (max-height: 833px) {
    width: 45px;
    height: 45px;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${theme.colors.danger};
  color: ${theme.colors.white};
  min-width: ${({ $widthSize }) => ($widthSize === "sm" ? "161px" : "223px")};
  width: auto;
  height: ${({ $heightSize }) => ($heightSize === "sm" ? "46px" : "74px")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  cursor: pointer;
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-family: "Goldman", sans-serif;
  font-size: ${({ $widthSize }) => ($widthSize === "sm" ? "16px" : "20px")};
  font-weight: 400;

  @media (max-height: 833px) {
    height: ${({ $heightSize }) => ($heightSize === "sm" ? "43px" : "64px")};
    font-size: ${({ $widthSize }) => ($widthSize === "sm" ? "14px" : "18px")};
  }
`;
