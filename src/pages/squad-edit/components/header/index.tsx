import * as S from "./styles";
import { useAppStore } from "../../../../infrastructure/store";

const Header = () => {
  const user = useAppStore((state) => state.user);

  return (
    <S.HeaderComponent>
      <div className="logo">
        <span className="square"></span>
        <span>
          <strong>JVM</strong> Launchpad
        </span>
      </div>
      <S.AdminInfoComponent>
        <span>
          <strong>{user?.name}</strong>
          <br />
          editar perfil
        </span>
        {user?.pictureLink ? (
          <img
            className="img"
            src={user.pictureLink}
            alt={`foto de perfil de ${user?.name}`}
          />
        ) : (
          <div className="img">{user?.name?.charAt(0)}</div>
        )}
      </S.AdminInfoComponent>
    </S.HeaderComponent>
  );
};

export default Header;
