export interface CardProps {
  title: string;
  subtitle: string;
  $secondary?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  backgroundImage?: string
}