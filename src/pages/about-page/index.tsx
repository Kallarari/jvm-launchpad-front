import { Background } from "../../components-squad-1/Background";
import { Header } from "../../components-squad-1/Header";
import { Text } from "../../components-squad-1/Text/";
import { AccordionItem } from "../about-page/components/index"; 

import * as S from './style.module';

const AboutPage = () => {
  return (
    <S.Container>
      <Background />
      <Header />

      <S.Content>
        {/* Título da Seção */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Text as="h1" font="goldman" size={48} color="white"> 
                Sobre o projeto 
            </Text>

            <Text as="span" font="goldman" size={16} color="white">
                muda o texto aqui gabriel!
            </Text>
        </div>

        {/* --- Card 1: O que é JVM --- */}
        <AccordionItem title="O que é JVM - Launchpad?">
             Uma iniciativa colaborativa e voluntária que integra estudo e prática em um ambiente de
             gamificação. Foca em aprofundar conhecimentos e aplicar habilidades em projetos práticos.
        </AccordionItem>

      </S.Content>
      
    </S.Container>
  );
};

export default AboutPage;