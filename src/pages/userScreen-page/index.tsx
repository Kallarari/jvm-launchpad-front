import * as S from "./styles.module";

import { Header } from "../../squad1-files/components/Header";
import { Background } from "../../squad1-files/components/Background";

const UserScreen = () => {
  return (
    <S.Container>
      <Background />
      <Header />

      <S.Content></S.Content>
    </S.Container>
  );
};

export default UserScreen;
