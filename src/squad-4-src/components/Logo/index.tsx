import { JVMText, LaunchpadText, LogoWrapper, StyledIcon } from "./styles";

export const Logo = () => {
  return (
    <LogoWrapper>
      <StyledIcon icon="mdi:rhombus" />
      <JVMText>JVM</JVMText>
      <LaunchpadText>Launchpad</LaunchpadText>
    </LogoWrapper>
  );
};
