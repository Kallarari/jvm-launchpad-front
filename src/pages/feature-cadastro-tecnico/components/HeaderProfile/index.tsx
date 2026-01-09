import {
  HeaderContent,
  TitleHeader,
  TextWhite,
  PerfilInfo,
  TextContent,
  ImgPerfil,
  ButtonUpdatePerfil,
  UserName,
  RetangleIcon
} from "./styles";
import perfilImg from "@/img/profileIcon.png";

export const Header = () => {
  return <HeaderContent>
    <TitleHeader>
      <RetangleIcon />
      <TextWhite>JVM</TextWhite>Launchpad
    </TitleHeader>

    <PerfilInfo>
      <TextContent>
        <UserName>José Gabriel</UserName>
        <ButtonUpdatePerfil onClick={() => alert("editar perfil")}>editar perfil</ButtonUpdatePerfil>
      </TextContent>
      <ImgPerfil src={perfilImg} alt="Perfil" />
    </PerfilInfo>
  </HeaderContent>;
}
