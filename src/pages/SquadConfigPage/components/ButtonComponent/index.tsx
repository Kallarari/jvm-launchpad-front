import type { ButtonProps } from "./interface";
import { StyledButton, StyledIcon } from "./styles";

export const ButtonComponent = ({ icon, label, size = "sm", sizeHeight = "md", onClick }: ButtonProps) => {
  return (
    <>
      <StyledButton size={size} sizeHeight={sizeHeight} onClick={onClick}>
        {icon && <StyledIcon icon={icon} />}
        {label && <span>{label}</span>}
      </StyledButton>
    </>
  );
};


export const BackButton = () => {
  return (
    <>
      <ButtonComponent icon="ep:back" />
    </>
  );
}

// Quando for utilizar, os respectivos icons são

// <ButtonComponent icon="mdi:plus" /> or <ButtonComponent label="+" />
// <BackButton /> = "<-"
