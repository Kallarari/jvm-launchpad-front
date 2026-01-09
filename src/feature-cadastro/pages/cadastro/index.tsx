// pages/cadastro/index.tsx
// pages/cadastro/index.tsx
// import { CadastroForm } from '../../components/CadastroForm';
// import { cadastroSchema } from './schema';
// import  { CadastroFormData } from './schema';
import HeaderCadastro from "./components/HeaderCadastro";
import Main from "./components/main";
import * as S from "./styles";
import { CadastroForm } from "../../components/CadastroForm";
import { Stepper } from "../../../feature-cadastro/components/Stepper";
import type { Step } from "../../components/Stepper/interfaces";
import { Footer } from "./components/FooterCadastro/styles";

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
    completed: false,
  },
  {
    id: 3,
    title: "Teste técnico",
    description: "Teste técnico guiado",
    completed: false,
  },
];


export default function Cadastro() {

  return (
    <>
      <S.Container>
        <div>
          <HeaderCadastro />
          <Main />
          <Stepper steps={steps} />
          <CadastroForm />
          <Footer />
        </div>
      </S.Container>

    </>
  );
}


// MeuComponente.jsx



