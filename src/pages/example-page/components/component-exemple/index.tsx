import {
  ComponentContainer,
  ComponentTitle,
  ComponentDescription,
  ComponentButton,
} from './styles';

export const ComponentExample = () => {
  return (
    <ComponentContainer>
      <ComponentTitle>Example</ComponentTitle>
      <ComponentDescription>descrição</ComponentDescription>
        <ComponentButton >
          Clique aqui
        </ComponentButton>
    </ComponentContainer>
  );
};

