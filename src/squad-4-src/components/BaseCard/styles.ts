import styled from "styled-components";
import "../../styles/fonts.css";

export const Card = styled.div`
  font-family: "Goldman", sans-serif;
  color: #ffffff;
  width: 100%;
  margin-bottom: 25px;
  height: 77px;
  background-color: #ffffff33;
  opacity: 1;
  border-radius: 10px;

  @media (max-height: 833px) {
    height: 65px;
    margin-bottom: 18px;
  }
`;
