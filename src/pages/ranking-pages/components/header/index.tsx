import LogoJVM from '../../assets/logo_jvm.svg';
import type { HeaderProps } from './interface';
import * as S from './styles';

export default function Header({ src, userName = 'Lindon Jhonson' }: HeaderProps) {
  return (
    <S.Header>
      <S.Logo src={LogoJVM} alt='JVM Launchpad' />

      <S.ProfileArea>
        <S.ProfileName>{userName}</S.ProfileName>
        <S.EditProfile title={`editar perfil de ${userName}`}>editar perfil</S.EditProfile>
        {src ? <S.ToggleCircleImg src={src} alt={`Foto de perfil de ${userName}`} /> : <S.ToggleCircle />}
      </S.ProfileArea>
    </S.Header>
  )
}