import { ScoreCard } from "../ScoreCard";
import type { MemberCardProps } from "./interface";
import { NameWrapper, NameText, Subtitle } from "./styles";

export const MemberCard = ({
  name,
  score,
  role,
  squadName,
  onAdd10,
  onAdd5,
  onAdd2,
}: MemberCardProps) => {
  return (
    <ScoreCard
      leftLabel={
        <NameWrapper>
          <NameText>{name.split(" ")[0]}</NameText>

          {role === "leader" && <Subtitle>Líder {squadName}</Subtitle>}
        </NameWrapper>
      }
      score={score}
      buttons={[
        { label: "+10", onClick: onAdd10 },
        { label: "+5", onClick: onAdd5 },
        { label: "+2", onClick: onAdd2 },
      ]}
    />
  );
};
