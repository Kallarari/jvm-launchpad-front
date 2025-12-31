import styled from "styled-components";
import { BaseCard } from "../../../../squad-4-src/components/BaseCard";

export const Wrapper = styled(BaseCard)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  justify-content: space-between;
`;

export const Left = styled.div`
  font-size: 32px;
  flex: 1;
`;

export const Center = styled.div`
  font-size: 32px;
  flex: 1;
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
  min-width: 150px;
  justify-content: flex-end;
`;
