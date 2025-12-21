import { useAuth } from "../../context/AuthContext";
import {
  EditProfile,
  UserCircle,
  UserInfo,
  UserName,
  UserWrapper,
} from "./styles";

export const User = () => {
  const { user } = useAuth();

  return (
    <UserWrapper>
      <UserInfo>
        <UserName>{user?.name}</UserName>
        <EditProfile>editar perfil</EditProfile>
      </UserInfo>
      <UserCircle />
    </UserWrapper>
  );
};
