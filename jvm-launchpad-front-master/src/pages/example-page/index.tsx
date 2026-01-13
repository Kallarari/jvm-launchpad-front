import { ComponentExample } from './components/component-exemple';
import { ExamplePageProvider, useExamplePageContext } from './context';
import { Container, Title, Content, Description } from './styles.module';
import { Icon } from '@iconify/react';

const ExamplePageContent = () => {
  const { data, isLoading } = useExamplePageContext();

  return (
    <Container>
      <Title>Example Page</Title>
      <Content>
        <Description>
          Esta é uma página de exemplo criada seguindo a arquitetura hexagonal orientada a features.
        </Description>

        <Icon icon="mdi:gear" color="red" width="24" height="24" />
        <ComponentExample />
        <ComponentExample />
        <ComponentExample />
        {isLoading && <p>Carregando...</p>}
        {data && (
          <div>
            <h3>{data.name}</h3>
            {data.description && <p>{data.description}</p>}
          </div>
        )}
      </Content>
    </Container>
  );
};

const ExamplePage = () => {
  return (
    <ExamplePageProvider>
      <ExamplePageContent />
    </ExamplePageProvider>
  );
};

export default ExamplePage;

