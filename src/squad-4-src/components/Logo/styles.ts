import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledIcon = styled(Icon)`
  color: #E63946;
  width: 32px;
  height: 32px;
  margin-right: 15px;
`;

export const JVMText = styled.span`
  font-family: 'Goldman', sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 1; 
  color: #ffffff;
  letter-spacing: -0.07em; 
`;

export const LaunchpadText = styled.span`
 font-family: 'Goldman', sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 1; 
  color: #E63946;
  letter-spacing: -0.07em;
`;
