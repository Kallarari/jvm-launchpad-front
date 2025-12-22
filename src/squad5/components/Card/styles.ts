import styled from "styled-components";
import jvmLaunchpad from "../../Assets/jvm-launchpad.png";

export const CardContainer = styled.div<{$secondary?:boolean}>`
  width: 249px;
  height: 321px;
  border-radius: 10px;
  background-image: url(${jvmLaunchpad});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 4px 0 #ffffff40;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px;
  position: relative;


`;

export const CardTitle = styled.h2<{$secondary?:boolean}>`
  width: 102px;
  height: 24px;
  color: #fff;
  font-family: 'Goldman', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 4px 0;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 230px;
  left:25px;
`;

export const CardSubtitle = styled.p`
  width: 66px;
  height: 16px;
  color: #fff;
  font-family: 'Goldman', sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  line-height: 100%;
  text-align: center;
  position: absolute;
  top: 260px;
  left:25px;
`;