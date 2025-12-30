import { AddPointsButton } from "../AddPointsButton";
import type { ScoreCardProps } from "./interface";
import { Wrapper, Left, Center, Right } from "./styles";

export const ScoreCard = ({ leftLabel, score, buttons }: ScoreCardProps) => {
  return (
    <Wrapper>
      <Left>{leftLabel}</Left>

      <Center>{score} pontos</Center>

      <Right>
        {buttons.map((btn) => (
          <AddPointsButton
            key={btn.label}
            label={btn.label}
            onClick={btn.onClick}
          />
        ))}
      </Right>
    </Wrapper>
  );
};
