import { Icon } from "@iconify/react";
import {
  CardContainer,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardHeaderTitle,
  CardHeaderActions,
  CardHeaderButton,
  TertiaryCardContainer,
  PlusButton,
  QuaternaryCardContainer,
  QuaternaryCardTitle
} from "./styles";

import type { CardProps } from "./types";

export const Card = ({ title, subtitle, backgroundImage, children, className }: CardProps) => (
  <CardContainer backgroundImage={backgroundImage} className={className} data-testid="card-container">
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
    {children}
  </CardContainer>
);

export const SecondaryCard = ({ title, subtitle }: CardProps) => (
  <CardContainer >
    <CardTitle $secondary>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
    <CardHeader>
      <CardHeaderTitle>Live start</CardHeaderTitle>
      <CardHeaderActions>
        <CardHeaderButton>
          <Icon icon="mdi:eye" width="22px" height="15px" />
        </CardHeaderButton>
        <CardHeaderButton>
          <Icon icon="mdi:trash-can" width="18" height="18" />
        </CardHeaderButton>
      </CardHeaderActions>
    </CardHeader>
  </CardContainer>
);

export const TertiaryCard = ({onClick}: Pick<CardProps, 'onClick'> ) => (
  <TertiaryCardContainer>
    <PlusButton onClick={onClick}>
      <Icon icon="mingcute:plus-fill" width="50" height="50" />
    </PlusButton>
  </TertiaryCardContainer>
);

export const QuaternaryCard = ({ title }: { title: string }) => (
  <QuaternaryCardContainer>
    <QuaternaryCardTitle>{title}</QuaternaryCardTitle>
  </QuaternaryCardContainer>
);