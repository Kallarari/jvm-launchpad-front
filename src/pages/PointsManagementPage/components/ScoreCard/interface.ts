import type { ReactNode } from "react";

export interface ScoreCardProps {
  leftLabel: ReactNode;
  score: number;
  buttons: Array<{
    label: string;
    onClick: () => void;
  }>;
}
