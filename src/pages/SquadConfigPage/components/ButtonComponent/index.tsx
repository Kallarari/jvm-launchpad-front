import type { ButtonProps } from "./interface";
import { StyledButton, StyledIcon } from "./styles";

export const ButtonComponent = ({
  icon,
  label,
  widthSize = "sm",
  heightSize = "sm",
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      $widthSize={widthSize}
      $heightSize={heightSize}
      onClick={onClick}
    >
      {icon && <StyledIcon icon={icon} />}
      {label && <div>{label}</div>}
    </StyledButton>
  );
};
