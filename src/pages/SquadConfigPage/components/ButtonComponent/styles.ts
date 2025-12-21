import styled from "styled-components";
import { Icon } from "@iconify/react";
import { theme } from "../../../../infrastructure";

export const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;

export const StyledButton = styled.button`
  background-color: ${theme.colors.danger};
  color: ${theme.colors.white};

  width: 161px;
  height: 74px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};

  margin: auto;
  cursor: pointer;

  border: none;
  border-radius: ${theme.borderRadius.lg};

  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes["3xl"]};
  font-weight: 400;

  * {
    pointer-events: none;
    color: inherit;
    line-height: 1;
  }
`;
