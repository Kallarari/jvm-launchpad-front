import styled from "styled-components";
import bgImage from "../../assets/Background.png"

export const PageWrapper = styled.div`
  height: 100vh;
  width:100%;  
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-color: #0D0D0D;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`