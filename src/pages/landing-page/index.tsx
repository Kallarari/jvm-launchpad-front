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
        <Background />
      <Content>
        
        <HeroSection>
          {/* Tagzinha de "Sistema Online" se houver */}
          
          <Title>
            Bem-vindo ao 
            <span>JVM Launchpad</span>
          </Title>

          <ButtonGroup>
            <Button font="inter" size={16} textColor="white">
              Cadastrar
            </Button>

            <Button font="goldman" size={13} textColor="white">
              Login
            </Button>
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