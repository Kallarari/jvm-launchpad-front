import styled from "styled-components";
import { BaseCard } from "../../../../squad-4-src/components/BaseCard";
import { Icon } from "@iconify/react";

export const MemberWrapper = styled(BaseCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const MemberName = styled.span`
  font-size: 32px;
  font-weight: 400;
  color: #fff;

  @media (max-height: 833px) {
    font-size: 25px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-height: 833px) {
    gap: 15px;
  }
`;

export const StyledIcon = styled(Icon)`
  color: #101010;
  cursor: pointer;
  width: 25px;
  height: 25px;

  @media (max-height: 833px) {
    width: 20px;
    height: 20px;
  }
`;

export const GithubButton = styled.button`
  width: 70px;
  height: 46px;
  border-radius: 2px 10px 2px 10px;
  border: none;
  background: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-height: 833px) {
    width: 60px;
    height: 40px;
  }
`;
