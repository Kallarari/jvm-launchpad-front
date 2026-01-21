import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SubHeader = styled.nav`
  gap: 3rem;
  display: flex;
  place-self: center;
  justify-content: space-between;
`;

export const SubHeaderButton = styled(Link) <{ $active?: boolean }>`
  cursor: pointer;
  font-weight: 400;
  color: oklch(1 0 0);
  font-size: 0.875rem;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  text-transform: uppercase;
  border-radius: 0 0 0.625rem 0.625rem;
  background: rgba(255, 255, 255, 0.08);
  transition: background 0.2s ease, transform 0.1s ease;

  ${({ $active }) =>
    $active &&
    css`
      background: oklch(0.6122 0.2082 22.24);
    `}

  &:hover {
    transform: translateY(-1px);
    background: oklch(0.6122 0.2082 22.24);
  }
`;