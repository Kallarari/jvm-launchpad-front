import styled from "styled-components";
import { BaseCard } from "../../../../squad-4-src/components/BaseCard";

export const Wrapper = styled(BaseCard)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`;

export const Left = styled.div`
  font-size: 32px;
  min-width: 130px;
`;

export const Center = styled.div`
  font-size: 32px;
  flex: 1;
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  gap: 8px;
  min-width: 150px;
  justify-content: flex-end;
`;
