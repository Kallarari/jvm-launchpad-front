import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; 
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
`;

export const UserName = styled.span`
  font-family: 'Goldman', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
`;

export const EditProfile = styled.button`
  font-family: 'Goldman', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
`;

export const UserCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #FFFFFF; 
`;
