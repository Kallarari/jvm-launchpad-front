export type ButtonSize = "sm" | "md";

export interface ButtonProps {
  icon?: string;
  label?: string;
  size?: ButtonSize;
  sizeHeight?: ButtonSize;
  onClick?: () => void;
}
