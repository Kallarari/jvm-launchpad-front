import { Icon } from "@iconify/react";
import { Card, CardHeader, CardDetails, DetailGroup, Actions, DeveloperName, StatusBadge, ActionsWrapper, InfoLabel, InfoValue, PortfolioIcon  } from "./styles";
import type { DevCardProps } from "./interface";

export function DevCard({dev}:DevCardProps) {
  return (
    <Card>
      <CardHeader>
        <DeveloperName>{dev.name}</DeveloperName>
        <ActionsWrapper>
          <StatusBadge>{dev.status}</StatusBadge>
          <PortfolioIcon>
              <a href="https://google.com" target="_blank"> 
              <Icon icon="nrk:link" width= "24px" height="24px"></Icon>
              </a>
          </PortfolioIcon>
        </ActionsWrapper>
      </CardHeader>
      
      <CardDetails>
        <DetailGroup>
            <InfoLabel>Turno preferido:</InfoLabel>
            <InfoValue>{dev.preferredShift}</InfoValue>
        </DetailGroup>
        <DetailGroup>
            <InfoLabel>Nível de desenvolvedor:</InfoLabel>
            <InfoValue>{dev.level}</InfoValue>
        </DetailGroup>
        <DetailGroup>
            <InfoLabel>Perfil do desenvolvedor:</InfoLabel>
            <InfoValue>{dev.profile}</InfoValue>
        </DetailGroup>
        <DetailGroup>
            <InfoLabel>Disponibilidade:</InfoLabel>
            <InfoValue>{dev.availability}</InfoValue>
        </DetailGroup>
        <Actions>
            <a href={dev.github} target="_blank">
              <Icon icon="mdi:github" width="24px" height="24px"></Icon>
            </a>

            <a href={`https://wa.me/${dev.whatsapp}`} target="_blank">
              <Icon icon="ri:whatsapp-fill" width="24px" height="24px"></Icon>
            </a>
        </Actions>
      </CardDetails>
    </Card>
  )
}