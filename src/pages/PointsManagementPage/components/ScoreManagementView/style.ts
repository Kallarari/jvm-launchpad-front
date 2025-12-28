import styled from "styled-components";

export const ScoreManagementWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MemberNameStyled = styled.div`
  display: flex;
  flex: 1;
  white-space: nowrap;

  align-items: center;
`;
export const MemberPointsStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex: 2;
`;

export const ScoreManagementStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;

  font-family: "Goldman", sans-serif;
  font-weight: 400;
  font-size: 32px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 827px;
  height: 77px;
  padding: 0 24px;
  margin: 26px;

  border-radius: 10px;
`;

export const PointsButtonWrap = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
`;
