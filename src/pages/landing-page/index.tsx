import { Background } from "../../components-squad-1/Background";
import { Button } from "../../components-squad-1/Button/Button";


// Importações dos estilos locais
import { 
  Container, 
  Content, 
  HeroSection, 
  Title, 
  ButtonGroup,
  VisualContent 
} from './style.module';

const LandingPage = () => {
  return (
    <Container>


      {/* Conteúdo Principal */}
      <Content>
        <Background />
        <HeroSection>
          {/* Tagzinha de "Sistema Online" se houver */}
          
          <Title>
            Bem-vindo ao 
            <span>JVM Launchpad</span>
          </Title>

          <ButtonGroup>
            <Button>Cadastrar</Button>
            <Button>Login</Button>
          </ButtonGroup>
        </HeroSection>

        <VisualContent>
           {/* Aqui entrariam as imagens/cards do lado direito (JS, TS, Code Snippet) */}
           {/* <img src="/assets/hero-illustration.png" alt="Hero" /> */}
        </VisualContent>
      </Content>
    </Container>
  );
};

export default LandingPage;