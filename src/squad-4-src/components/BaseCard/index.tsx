import type { BaseCardProps } from "./interface";
import { Card } from "./styles";

export function BaseCard({ children, className, ...props }: BaseCardProps) {
  return (
    <Card {...props} className={className}>
      {children}
    </Card>
  );
}
