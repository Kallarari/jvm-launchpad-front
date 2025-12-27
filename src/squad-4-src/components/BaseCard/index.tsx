import type { BaseCardProps } from "./interface";
import { Card } from "./styles";

export function BaseCard({ children, className }: BaseCardProps) {
  return <Card className={className}>{children}</Card>;
}
