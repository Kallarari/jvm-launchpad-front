import { Icon } from "@iconify/react";
import { ActionButton, Info, MembersNumber, Panel, Title } from "./styles";
import type { SquadPanelProps } from "./interface";

export const SquadPanel = ({ name, number, onClick }: SquadPanelProps) => {
  return (
    <Panel>
      <Title>{name}</Title>

      <Info $low={number < 3}>
        <Icon icon="mdi:account" width="45px" height="48px" />
        <MembersNumber $low={number < 3}>{number}</MembersNumber>
      </Info>

      <ActionButton onClick={onClick}>
        <Icon icon="mdi:gear" color="white" width="45px" height="50px" />
      </ActionButton>
    </Panel>
  );
};
