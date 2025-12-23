import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  HeaderWrapper,
  HeaderContent,
  UserBadage,
  UserInfo,
  Avatar,
  SubHeaderWrapper,
  SubHeader,
} from "../../components/Header/styles";
import UserImage from "../../Assets/Ellipse.svg";
import { Card, SecondaryCard,  TertiaryCard, QuaternaryCard } from "../../components/Card";
import { BodyContainer, CardsRow } from "../../components/Body/styles";

const cardsMock = [
  { type: "primary", title: "Live Start", subtitle: "Live Start" },
  { type: "secondary", title: "Live Start", subtitle: "Live Start" },
  { type: "tertiary", title: "Live Start", subtitle: "Live Start" },
  { type: "quaternary", title: "Preview", subtitle: "Live Start"},
  ];

export function AcervoConteudo() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <HeaderContent />
          <UserBadage>
            <UserInfo>
              <span>Lindon Jhnson</span>
              <a href="/perfil">editar perfil</a>
            </UserInfo>
            <Avatar src={UserImage} alt="Lindonjhnson" />
          </UserBadage>
        </HeaderWrapper>
      </Header>

      <SubHeaderWrapper>
        <SubHeader><span>Classificação de squads</span></SubHeader>
        <SubHeader><span>Classificação de devs</span></SubHeader>
        <SubHeader><span>Material de apoio</span></SubHeader>
      </SubHeaderWrapper>

      <BodyContainer>
        <CardsRow>
          {cardsMock.map((card, idx) => {
            if (card.type === "primary") {
              return <Card key={idx} title={card.title} subtitle={card.subtitle} />;
            }
            if (card.type === "secondary") {
              return <SecondaryCard key={idx} title={card.title} subtitle={card.subtitle} />;
            }
            if (card.type === "tertiary") {
              return <TertiaryCard key={idx} />;
            }
              if (card.type === "quaternary") {
              return <QuaternaryCard key={idx} title={card.title} />;
            }
            return null;
          })}
        </CardsRow>
      </BodyContainer>
      <Footer>
        <span>all right reserved to JVM launchpad</span>
      </Footer>
    </>
  );
}