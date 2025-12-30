import { ScoreCard } from "../ScoreCard";
import type { SquadCardProps } from "./interface";

export const SquadCard = ({ name, score, onAdd1, onAdd2 }: SquadCardProps) => {
  return (
    <ScoreCard
      leftLabel={name}
      score={score}
      buttons={[
        { label: "+2", onClick: onAdd2 },
        { label: "+1", onClick: onAdd1 },
      ]}
    />
  );
};
