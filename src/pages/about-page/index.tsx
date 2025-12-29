import { Background } from "../../components-squad-1/Background";
import { Header } from "../../components-squad-1/Header";
import { Text } from "../../components-squad-1/Text/";

import * as S from './style.module';

const AboutPage = () => {
  return (
    <S.Container>
      <Background />
      <Header />

      <S.Content>
        <Text as="span" font="goldman">  AAAAAAAAAAA </Text>   

      </S.Content>
      
    </S.Container>
  );
};

export default AboutPage;