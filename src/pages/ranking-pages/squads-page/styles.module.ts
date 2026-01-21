import { Icon } from '@iconify/react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { theme } from '../../../infrastructure';
import BackgroundImg from '../assets/bg.png';
import { podiumHeight, podiumMargim, type PodiumPositionType } from './interface';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap');

  * {
    margin: 0;
    box-sizing: border-box;
    letter-spacing: -0.07em;
    font-family: Goldman, 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  #root {
    width: 100%;
    display: flex;
    overflow: hidden;
    min-height: 100dvh;
    position: relative;
    color: ${theme.colors.white};
    flex-direction: column;
    background-size: cover;
    background-image: url(${BackgroundImg});
    background-color: oklch(0.1448 0 0);
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0.75rem 0;
  text-align: center;
  position: relative;
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

export const PodiumWrapper = styled.section`
  display: grid;
  align-items: end;
  justify-content: center;
  grid-template-rows: auto auto auto;
  grid-template-columns: repeat(3, 18.75rem);
`;

export const PodiumAvatarWrapper = styled.div<{ $svg?: boolean, $position: PodiumPositionType }>`
  grid-row: 1;
  display: flex;
  width: 11.875rem;
  height: 11.875rem;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-self: center;
  justify-content: center;
  border: 0.188rem solid oklch(0.6321 0.2235 19.85);
  margin-bottom: ${({ $position }) => podiumMargim[$position]}rem;

  ${({ $svg }) => $svg && css`
    svg g {
      stroke-width: 0.06rem;
    }
  `}
`;

export const IconUser = styled(Icon).attrs({
  width: '6.853rem',
  height: '6.853rem',
})`
  filter: drop-shadow(0 0 0.5rem oklch(1 0 0 / 25.1%));
`;

export const PodiumAvatar = styled.img`
  width: 6.875rem;
  height: 6.875rem;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 0.5rem 0 oklch(1 0 0 / 25.1%);
`;

export const PodiumPosition = styled.div`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);

  width: 3rem;
  display: flex;
  font-size: 48px;
  height: 3.625rem;
  font-weight: 700;
  position: absolute;
  align-items: center;
  background: #f3344e;
  justify-content: center;
  border-radius: 0.625rem;
`;

export const PodiumStep = styled.div<{ $position: PodiumPositionType }>`
  display: flex;
  width: 18.75rem;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.625rem 0.625rem 0 0;
  background: oklch(0.6122 0.2082 22.24 / 34.9%);
  height: ${({ $position }) => podiumHeight[$position]}px;
`;

export const TableWrapper = styled.section`
  width: 100%;
  display: grid;
  position: relative;
  align-self: center;
  grid-column: 1 / -1;
  flex-direction: column;
  background-color: #E6394659;
`;

export const TableHeader = styled.div`
  width: 100%;
  display: flex;
  font-size: 2rem;
  padding: 1rem 2rem;
  align-items: center;
  text-transform: uppercase;
  justify-content: space-between;
`;

export const TableCellName = styled.div`
  text-align: left;
`;

export const TableCellScore = styled.div`
  text-align: right;
`;

export const TableRow = styled.div`
  display: flex;
  padding: 18px 32px;
  font-weight: 400;
  font-size: 32px;
  border-radius: 10px;
  background: #FFFFFF33;
  margin: 2px 0;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

export const Footer = styled.footer`
  font-weight: 400;
  margin-top: auto;
  text-align: center;
  min-height: 5.75rem;
  font-size: 0.938rem;
  align-content: center;
  background-color: oklch(0.1591 0 0 / 60%);
  border-bottom: 0.063rem solid oklch(0.3904 0 0);
`;

export const Loading = styled(Icon).attrs({
  width: 80,
  height: 80
})`
  inset: 0;
  margin: auto;
  position: absolute;
  text-align: center;
`;
