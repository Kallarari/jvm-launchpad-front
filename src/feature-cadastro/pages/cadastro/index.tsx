// pages/cadastro/index.tsx
// pages/cadastro/index.tsx
// import { CadastroForm } from '../../components/CadastroForm';
// import { cadastroSchema } from './schema';
// import  { CadastroFormData } from './schema';
import HeaderCadastro from "./components/HeaderCadastro";
import Main from "./components/main";
import * as S from "./styles";
import { CadastroForm } from "../../components/CadastroForm";
import { Stepper } from "../../components/Stepper";
import { Footer } from "./components/FooterCadastro/styles";

export default function Cadastro() {

  return (
    <>
      <S.Container>
        <div>
          <HeaderCadastro />
          <Main />
          <Stepper />
          <CadastroForm />
          <Footer />
        </div>
      </S.Container>

    </>
  );
}


// MeuComponente.jsx



