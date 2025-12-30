import { Icon } from "@iconify/react";
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  font-family: "Inter", sans-serif;
  margin: 26px 0px 37px 0px;
`;

export const SearchLabel = styled.label`
  font-size: 14px;
  color: #ffffff;
`;

export const SearchBarWrapper = styled.div`
  background-color: #ffffff;
  height: 59px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  gap: 25px;

  transition: all 0.2s ease;

  &:focus-within {
    border-bottom: 2px solid #e63946;
  }
`;
export const SearchInput = styled.input`
  flex: 1;
  font-size: 16px;
  border-bottom: 1px solid #000000;
`;

export const SearchIcon = styled(Icon)`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;
