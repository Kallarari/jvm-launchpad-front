import styled from "styled-components";

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const UserName = styled.span`
  font-family: 'Goldman', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`

export const EditLink = styled.button`
  font-family: 'Goldman', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  opacity: 0.7;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  & :hover{
    opacity: 1;
  }
`

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius:50px;
  background-color: #ffffff;
`

