import React from 'react';
import type { CardProps } from './interface';
import { CardContainer, CardImage, CardTitle, CardDescription } from './styles';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, backgroundUrl }) => (
  <CardContainer backgroundUrl={backgroundUrl}>
    {imageUrl && <CardImage src={imageUrl} alt={title} />}
    <CardTitle>{title}</CardTitle>
    {description && <CardDescription>{description}</CardDescription>}
  </CardContainer>
);

export { Card };