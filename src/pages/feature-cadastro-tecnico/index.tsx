import GlobalStyle, { Container } from "./styles.module";
import { Header }  from "../feature-cadastro-tecnico/components/HeaderProfile";
import  Main  from "@/feature-cadastro/pages/cadastro/components/main";
import { Footer } from "@/feature-cadastro/pages/cadastro/components/FooterCadastro";
import {Stepper} from "@/feature-cadastro/components/Stepper";
import type { Step } from "@/feature-cadastro/components/Stepper/interfaces";
import { FormCadastro } from "../feature-cadastro-tecnico/components/FormCadastro";

const steps: Step[] = [
  {
    id: 1,
    title: "Conhecer o projeto",
    description: "Ler o notion com as regras",
    completed: true,
  },
  {
    id: 2,
    title: "Cadastro",
    description: "Preencher dados aqui",
    completed: true,
  },
  {
    id: 3,
    title: "Teste técnico",
    description: "Teste técnico guiado",
    completed: false,
  },
];

const CadastroTecnicoPage = () => {
  return(
   <>
    <GlobalStyle />
    <Container>
      <Header />
      <Main/>
      <Stepper steps={steps} />
      <FormCadastro />
      <Footer />
    </Container>
    </>
  );
}
export default CadastroTecnicoPage;