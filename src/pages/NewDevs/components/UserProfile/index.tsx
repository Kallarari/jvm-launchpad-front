import { EditLink, UserAvatar, UserDetails, UserName, UserProfileContainer } from "./styles";

export function User (){
  return(
    <UserProfileContainer>
      <UserDetails>
        <UserName>Lindon Jhonson</UserName>
        <EditLink>editar perfil</EditLink>
      </UserDetails>
      <UserAvatar />
    </UserProfileContainer>
  );
};