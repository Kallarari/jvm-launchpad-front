import { BrandSecondary, BrandPrimary, LogoContainer, BrandIcon } from "./styles";

export function Logo(){
  return(
    <LogoContainer>
      <BrandIcon icon="mdi:rhombus"/>
      <BrandPrimary>JVM</BrandPrimary>
      <BrandSecondary>Launchpad</BrandSecondary>
    </LogoContainer>
  )
}