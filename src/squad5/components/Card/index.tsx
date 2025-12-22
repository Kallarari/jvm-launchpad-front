import { CardContainer, CardTitle, CardSubtitle } from "./styles";
import type { CardProps } from "./types";

export const Card = ({ title, subtitle }: CardProps) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </CardContainer>
);

export const SecondaryCard = ({ title, subtitle }: CardProps) => (
  <CardContainer $secondary>
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </CardContainer>
);

export const TertiaryCard = ({ title, subtitle }: CardProps) => (
  <CardContainer $secondary>
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </CardContainer>
);

export const QuaternaryCard = ({ title, subtitle }: CardProps) => (
  <CardContainer $secondary>
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </CardContainer>
);