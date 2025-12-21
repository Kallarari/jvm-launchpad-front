import type { ButtonProps } from "./interface";
import { StyledButton, StyledIcon } from "./styles";

export const ButtonComponent = ({ button }: ButtonProps) => {
  return (
    <>
      <StyledButton>{button && <StyledIcon icon={button} />}</StyledButton>
    </>
  );
};

// Quando for utilizar, os respectivos icons são

// <ButtonComponent button="ep:back" />
// <ButtonComponent button="mdi:plus" />
