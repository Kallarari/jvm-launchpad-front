import styled from "styled-components";

export const ScoreManagementWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreManagementStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 827px;
  height: 77px;
  padding: 0 24px;
  margin: 26px;

  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;

  font-family: "Goldman", sans-serif;
  font-weight: 400;
  font-size: 32px;

  border-radius: 10px;
`;

export const MemberNameStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
`;

export const LeaderText = styled.span`
  font-size: 12px;
  color: rgba(230, 57, 70, 1);
`;

export const MemberPointsStyled = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const PointsButtonWrap = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
`;
