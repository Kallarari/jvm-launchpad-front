import styled from "styled-components";

interface InfoColumnProps {
  $align?: "left" | "center" | "right";
}

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 71px 40px 40px 40px;

  @media (max-height: 833px) {
    padding: 40px;
  }
`;

export const InfoColumn = styled.div<InfoColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) =>
    $align === "left"
      ? "flex-start"
      : $align === "right"
      ? "flex-end"
      : "center"};
  flex: 1;
  font-family: "Inter", sans-serif;
`;

export const InfoTitle = styled.span`
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const InfoValue = styled.span`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;

  @media (max-height: 833px) {
    font-size: 25px;
  }
`;
