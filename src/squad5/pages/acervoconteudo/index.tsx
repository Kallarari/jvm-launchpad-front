import { Body } from "../../components/Body";
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

      <Body>
        <h1> 😎 </h1>
      </Body>
      <Footer>
        <span>all right reserved to JVM launchpad</span>
      </Footer>
    </>
  );
}