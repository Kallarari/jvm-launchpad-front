import type { ComponentExempleProps } from './interface';
import {
  ComponentContainer,
  ComponentTitle,
  ComponentDescription,
  ComponentButton,
} from './styles';

export const ComponentExemple = ({
  title = 'Component Exemple',
  description = 'Este é um componente de exemplo criado seguindo a arquitetura hexagonal orientada a features.',
  onClick,
}: ComponentExempleProps) => {
  return (
    <ComponentContainer>
      <ComponentTitle>{title}</ComponentTitle>
      <ComponentDescription>{description}</ComponentDescription>
      {onClick && (
        <ComponentButton onClick={onClick}>
          Clique aqui
        </ComponentButton>
      )}
    </ComponentContainer>
  );
};

