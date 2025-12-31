import styled from "styled-components";
import { BaseCard } from "../../../../squad-4-src/components/BaseCard";

interface LowProps {
  $low: boolean;
}

export const Panel = styled(BaseCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

export const Title = styled.div`
  font-size: 32px;
  flex: 1;
`;

export const Info = styled.div<LowProps>`
  display: flex;
  align-items: center;
  flex: 1;

  svg {
    color: ${({ $low }) => ($low ? "#E63946" : "#FFFF")};
  }
`;

export const MembersNumber = styled.div<LowProps>`
  font-size: 32px;
  color: ${({ $low }) => ($low ? "#E63946" : "#FFFF")};
`;

export const ActionButton = styled.button`
  cursor: pointer;
`;
