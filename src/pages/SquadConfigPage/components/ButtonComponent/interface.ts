export type ButtonSize = "sm" | "md";

export interface ButtonProps {
  icon?: string;
  label?: string;
  widthSize?: ButtonSize;
  heightSize?: ButtonSize;
  onClick?: () => void;
}
