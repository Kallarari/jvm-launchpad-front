
export interface SectionHeaderProps {
  titlePrimary: string;

  leftIcon?: React.ReactNode;
  onLeftClick?: () => void; 

  onRightClick?: () => void;
  rightLabel?: string;
  
}