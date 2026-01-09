import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: "Goldman",sans-serif ;
  margin-bottom:20px;
`
export const CardHeader = styled.div`
  justify-content: space-between;
  display: flex;
  background-color: #333333;
  border-radius: 10px 10px 0 0;
  padding: 12px 24px;
  width: 100%;
  box-sizing: border-box;
`

export const DeveloperName = styled.h2`
  font-family: "Goldman", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #ffffff;
  margin-left: 15px;
`

export const StatusBadge = styled.div`
  background-color: #E63946;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`
export const PortfolioIcon = styled.div`
  background: #ffffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;

  a {
    color: #000000ff;
  }

`

export const CardDetails = styled.div`
width: 100%;
  background-color: #101010;
  display: flex;
  padding: 20px 10px;
  align-items: center;
  border-radius: 0 0 10px 10px;
`
export const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 20px;
  flex: 1;
  border-left: 1px solid rgba(255,255,255,0.4);

  &:first-child {
    border-left: none;
  }
`

export const InfoLabel = styled.span`
  font-size: 12px;
  color: #ffffff;
  opacity: 0.7;
  white-space: nowrap;
`

export const InfoValue = styled.span`
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
`
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 20px;

  a {
    color: #ffffff;
    transition: color 0.2s;
    &:hover{
      color: #E63946;
    }
  }
`