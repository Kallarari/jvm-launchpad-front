import styled from "styled-components";
import { Icon } from "@iconify/react";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  user-select: none;
`

export const BrandIcon = styled(Icon)`
  color: #E63946;
  width: 32px;
  height: 32px;

`

export const BrandPrimary = styled.span`
  font-family: 'Goldman', sans-serif;
  font-weight: 400;
  font-size:36px;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0,07em;
`

export const BrandSecondary = styled.span `
  font-family: 'Goldman', sans-serif;
  font-weight: 400;
  font-size:36px;
  color: #E63946;
  line-height: 1;
  letter-spacing: -0.07em;
`