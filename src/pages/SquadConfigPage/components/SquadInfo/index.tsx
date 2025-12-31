import type { SquadInfoModalProps } from "./interface";
import { InfoWrapper, InfoColumn, InfoTitle, InfoValue } from "./styles";

export const SquadInfo = ({ squad }: SquadInfoModalProps) => {
  return (
    <InfoWrapper>
      <InfoColumn $align="left">
        <InfoTitle>Nome</InfoTitle>
        <InfoValue>{squad.name}</InfoValue>
      </InfoColumn>

      <InfoColumn $align="center">
        <InfoTitle>Horário da daily</InfoTitle>
        <InfoValue>{squad.dailyTime} hrs</InfoValue>
      </InfoColumn>

      <InfoColumn $align="right">
        <InfoTitle>Turno preferido</InfoTitle>
        <InfoValue>{squad.preferredShift}</InfoValue>
      </InfoColumn>
    </InfoWrapper>
  );
};
