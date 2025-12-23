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
import { FaEye, FaTrash, FaPlus } from "react-icons/fa";

export const Card = ({ title, subtitle }: CardProps) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </CardContainer>
);

export const SecondaryCard = ({ title, subtitle }: CardProps) => (
  <CardContainer $secondary>
    <CardTitle $secondary>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
    <CardHeader>
      <CardHeaderTitle>Live start</CardHeaderTitle>
      <CardHeaderActions>
        <CardHeaderButton>
          <FaEye />
        </CardHeaderButton>
        <CardHeaderButton>
          <FaTrash />
        </CardHeaderButton>
      </CardHeaderActions>
    </CardHeader>
  </CardContainer>
);

export const TertiaryCard = () => (
  <TertiaryCardContainer>
    <PlusButton>
      <FaPlus />
    </PlusButton>
  </TertiaryCardContainer>
);

export const QuaternaryCard = ({ title }: { title: string }) => (
  <QuaternaryCardContainer>
    <QuaternaryCardTitle>{title}</QuaternaryCardTitle>
  </QuaternaryCardContainer>
);