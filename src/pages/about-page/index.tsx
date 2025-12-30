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
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Text as="h1" font="goldman" size={48} color="white"> 
                Sobre o projeto 
            </Text>

            <Text as="span" font="goldman" size={24} color="white">
                Bem-vindo à iniciativa colaborativa e voluntária onde o estudo encontra a prática em um ambiente de gamificação.
               Nosso objetivo é acelerar o seu desenvolvimento em projetos reais!
            </Text>
        </div>

        <AccordionItem title="O que é JVM - Launchpad?">
             Uma iniciativa colaborativa e voluntária que integra estudo e prática em um ambiente de
             gamificação. <br/> Foca em aprofundar conhecimentos e aplicar habilidades em projetos práticos.
        </AccordionItem>

        <AccordionItem title="A participação é paga?">
             Não. É totalmente voluntária e gratuita.
             Não há custos para integrar a comunidade e participar dos projetos.
        </AccordionItem>

        <AccordionItem title="Qual é o nível ideal de participantes?">
             Idealmente para participantes de nível Iniciante a Intermediário que desejam aprimorar habilidades. 
             <br/> Sêniores ou superiores são convidados a participar como Mentores ou em funções voluntárias similares.
        </AccordionItem>

        <AccordionItem title="Quais são as tecnologias essenciais para participar?">
             <li> JavaScript (ReactJS)</li>
             <li> TypeScript</li>
             <li> HTML/CSS</li>
             <li> Git/GitHub</li>
        </AccordionItem>

        <AccordionItem title="Como funciona a Fila de Espera?">
              Devido à natureza voluntária e à organização em Squads fixas,
              infelizmente não é possível atender a toda a demanda de participação de uma só vez. <p/>

              <li> Objetivo: Criamos uma Fila de Espera/Reserva para garantir que todos os interessados tenham a chance de participar.</li>
              <li> Ativação: Os participantes na fila serão chamados para integrar o projeto nas seguintes situações:</li>
              <li> Surgimento de uma vaga aberta em uma Squad existente.</li>
              <li> Formação de uma nova Squad pela administração do projeto.</li>
        </AccordionItem>

        <AccordionItem title="Como Funciona a Gamificação?">
             O projeto é dividido em Etapas (Níveis) que funcionam como mini-projetos de dificuldade progressiva, começando do mais fácil e avançando gradualmente. <p/>
             <li>Etapas: Cada etapa exige a entrega de um mini-projeto específico (ex: uma tela, uma funcionalidade, um protótipo, etc.).</li>
             <li>Avanço: A Squad avança para a próxima etapa somente se o mini-projeto atual for concluído corretamente.</li>
             <li>Penalidade: Em caso de erros, entrega incompleta ou incorreta, a Squad perde pontos.</li>
        </AccordionItem>

        <AccordionItem title="Pontuação e Recompensas">
             - Quem recebe pontos? <p/>
             Todos os participantes recebem pontos, tanto individuais quanto como uma Squad.<p/>
             - Como ganhar pontos? <p/>
             A Squad ganha pontos ao terminar corretamente uma etapa/mini-projeto.<p/>
        </AccordionItem>

        <AccordionItem title="Formação das Equipes">
            <h3>- O que é uma Squad?</h3>
            A unidade básica do projeto. É composta por três participantes, sendo um deles designado como Líder. <p/> 
            <h3>- Como são formadas? </h3>
            As Squads são formadas pela administração do projeto, agrupando os participantes. O cadastro inicial é via formulário (atualmente Google Forms). <p/>
            <h3>- As Squads são permanentes?</h3>
            Não. A composição é flexível e pode mudar conforme as regras de negócio e necessidades do projeto. <p/>
            <h3>- Pode haver substituição ou transferência?</h3>
            Se um membro for desativado, ele será substituído para manter a Squad com três membros. O projeto permite a transferência de participantes entre Squads conforme necessidade.
        </AccordionItem>

        <AccordionItem title="Papel do Líder da Squad">
             <h3>- O que é Líder da Squad?</h3>
             O Líder é a figura central da Squad, responsável tanto pela gestão técnica quanto pelo desenvolvimento dos membros. <p/>
             <h3>- Quais são as responsabilidades de um Líder da Squad?</h3>
             <li>Desenvolvimento Ativo</li>
             <li>O Líder deve codificar ativamente (hands-on) em conjunto com os membros da Squad.</li>
             <li>Revisão de Código (Code Review)</li>
             <li>Responsável por revisar o código dos membros, garantindo a qualidade, a aplicação das boas práticas e a conformidade com os requisitos do projeto.</li>
             <li>Suporte aos companheiros de equipe</li>
             <li>Ajudar e orientar os membros da Squad em dúvidas técnicas, na resolução de problemas e no entendimento dos requisitos da Etapa.</li>
             <li>Comunicação/Entrega</li>
             <li>Ponto focal para a comunicação com a administração e responsável pela entrega final do mini-projeto da Etapa.</li>
        </AccordionItem>

        <AccordionItem title="Troca de Liderança (Meritocracia)">
             <h3> - Substituição do Líder: </h3>
              Um Líder pode perder o cargo (sendo rebaixado a Membro ou saindo do projeto) se seu desempenho ou atitude exigirem. <p/>
             <h3> - Promoção do Membro: </h3>
             Um Membro pode ser promovido a novo Líder da Squad se destacar-se e demonstrar maior aptidão ou comprometimento que o Líder atual.
        </AccordionItem>


      </S.Content>
    </S.Container>
  );
};

export default AboutPage;