import { ExemplePageProvider, useExemplePageContext } from './context';
import { Container, Title, Content, Description } from './styles.module';
import { ComponentExemple } from '../../components/component-exemple';

const ExemplePageContent = () => {
  const { data, isLoading } = useExemplePageContext();

  return (
    <Container>
      <Title>Exemple Page</Title>
      <Content>
        <Description>
          Esta é uma página de exemplo criada seguindo a arquitetura hexagonal orientada a features.
        </Description>
        <ComponentExemple />
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

const ExemplePage = () => {
  return (
    <ExemplePageProvider>
      <ExemplePageContent />
    </ExemplePageProvider>
  );
};

export default ExemplePage;

