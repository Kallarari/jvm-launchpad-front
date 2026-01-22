import type { SubHeaderProps } from './interface';
import * as S from './styles';

export default function SubHeader({ dev = false }: SubHeaderProps) {
  return (
    <S.SubHeader>
      <S.SubHeaderButton $active={!dev} to={dev ? '../squads' : ''}>Classificação de squads</S.SubHeaderButton>
      <S.SubHeaderButton $active={dev} to='../devs'>Classificação de devs</S.SubHeaderButton>
      <S.SubHeaderButton to='/materials'>Material de apoio</S.SubHeaderButton>
    </S.SubHeader>
  )
}