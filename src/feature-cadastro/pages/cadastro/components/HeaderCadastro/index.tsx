import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.IconeRetangulo />
          <S.Logo>JVM <span>Launchpad</span></S.Logo>
        </S.Left>
        <S.Right>
          <S.Link href="#">Criar nova conta</S.Link>
          <S.Button>Login</S.Button>
        </S.Right>
      </S.Wrapper>
    </S.Container>
    
    
  );
}