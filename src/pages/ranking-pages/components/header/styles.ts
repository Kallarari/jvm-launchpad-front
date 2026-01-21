import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 5.75rem;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  background-color: oklch(0.1591 0 0 / 60%);
  border-bottom: 0.063rem solid oklch(0.3904 0 0);
`;

export const Logo = styled.img`
  min-width: 21.638rem;
  min-height: 2.763rem;
`;

export const ProfileArea = styled.div`
  gap: 0 0.5rem;
  display: grid;
  font-weight: 400;
  white-space: nowrap;
  align-items: center;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  grid-template-areas: "name avatar" "edit avatar";
`;

export const ProfileName = styled.span`
  grid-area: name;
  font-size: 1rem;
  text-align: right;
`;

export const EditProfile = styled.button`
  border: none;
  grid-area: edit;
  cursor: pointer;
  background: none;
  text-align: right;
  font-size: 0.938rem;
  color: oklch(1 0 0);
  text-decoration: underline;
`;

export const toggleCircleStyles = ({ $bg = true }) => css`
  width: 3.125rem;
  height: 3.125rem;
  grid-area: avatar;
  min-width: 3.125rem;
  min-height: 3.125rem;
  border-radius: 62.438rem;

  ${$bg && css`
    background: oklch(1 0 0);
  `}
`;

export const ToggleCircle = styled.div`
  ${() => toggleCircleStyles({})}
`;

export const ToggleCircleImg = styled.img`
  ${() => toggleCircleStyles({ $bg: false })}
`;