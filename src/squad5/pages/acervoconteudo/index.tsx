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
import { Card } from "../../components/Card";
import {  CardsRow } from "../../components/Body/styles";
import type { IAcervo, IHttpResponse } from "../../interface";
import { useEffect, useState } from "react";
import { getAcervo } from "../../mock";
import { TitleAcervo } from "../../components/Title";
import { Body } from "../../components/Body";


export function AcervoConteudo() {

  const [acervoLista, setAcervoLista] = useState<IHttpResponse<IAcervo[]> | null>(null)

  useEffect(  () => {
    const listAcervo = async () => {
      setAcervoLista( await getAcervo())
    }
    listAcervo()
  },[])


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

      <Body>
        <TitleAcervo/>

        <CardsRow>
          {!!acervoLista &&
            acervoLista.body.map(({id, titulo, subTitulo}) =>
              <Card key={id } title={titulo} subtitle={subTitulo} />
            )
          }

        </CardsRow>
      </Body>
      <Footer>
        <span>all right reserved to JVM launchpad</span>
      </Footer>
    </>
  );
}
