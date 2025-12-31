import styled from "styled-components";
import bgImage from "../../assets/images/brackground.png";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0d0d0d;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 307px;
`;
