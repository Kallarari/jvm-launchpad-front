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
  align-items: stretch;
  padding: 24px 0 0 0; 
  position: relative;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: linear-gradient(
    to top,
    #101010 85%,
    rgba(16, 16, 16, 0.0) 100%
  );
  border-radius: 0 0 16px 16px;
  padding: 12px 0 8px 0; // <-- só vertical!
  min-height: 50px;
  position: relative;
`;

export const CardHeaderTitle = styled.span`
  color: #fff;
  font-family: 'Goldman', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  white-space: nowrap;
  margin-left: 15px;
`;

export const CardHeaderActions = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 15px;
`;

export const CardHeaderButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: transparent;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  padding: 0;

  &:hover {
    background: #fff;
    color: #101010;
  }
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
  justify-content: flex-start;
  text-align: center;
  position: absolute;
  white-space: nowrap;
  top: 230px;
  left:15px;
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
  white-space: nowrap;
  top: 260px;
  left:15px;
`;

export const TertiaryCardContainer = styled(CardContainer)`
  background: #e63946;
  background-image: none;
  justify-content: center;
  align-items: center;
`;

export const PlusButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  color: #e63946;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #e63946;
    color: #fff;
    border: 2px solid #fff;
  }
`;

export const QuaternaryCardContainer = styled(CardContainer)`
  background: #e63946;
  background-image: none;
  justify-content: center;
  align-items: center;
`;

export const QuaternaryCardTitle = styled.h2`
  color: #fff;
  font-family: 'Goldman', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;