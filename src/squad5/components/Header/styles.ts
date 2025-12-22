import styled from "styled-components";
import HeaderLogo from "../../Assets/HeaderContent.svg";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;
  height: 92px;

  background-color: hsla(0, 0%, 5%, 0.6);
  border-bottom: 1px solid hsla(0, 0%, 27%, 1);
  
  display: flex;
  justify-content: center;
`;


export const HeaderWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 48px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position: relative;
`;

export const HeaderContent = styled.div`
  width: 346px;
  height: 44px;

  background-image: url(${HeaderLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const UserBadage = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    color: hsla(0, 0%, 100%, 1);
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.07em;
  }

  a {
    color: hsla(0, 0%, 100%, 1);
    font-size: 13px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.07em;
    text-decoration: underline;
    transition: color 0.2s ease;
    text-align: right   ;

    &:hover {
      color: hsl(0, 0%, 70%);
    }
  }
`;

export const SubHeaderWrapper = styled.div`
  position: fixed;
  top: 93px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  max-width: 1440px;
  width: 100%;
  padding: 0 48px;

  display: flex;
  gap: 47px;
  justify-content: center;
`;

export const SubHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 194px;
  height: 33px;

  background-color: hsla(355, 78%, 56%, 1);
  border: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: none;
  }

  span {
    color: hsl(208, 100%, 97%);
    font-family: 'Goldman', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.007em;
    user-select: none;
  }
`;