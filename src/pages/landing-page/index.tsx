import { Background } from "../../squad1-files/components/Background/";
import { Header } from "../../squad1-files/components/Header";
import { HeroSection } from "../../pages/landing-page/components/HeroSection";
import { BottomSection } from "../../pages/landing-page/components/BottomSection";

import * as S from './styles.module';

const LandingPage = () => {
  return (
    <S.Container>
      <Background />
      <Header />

      <S.Content>
        <HeroSection />
        <BottomSection />

      </S.Content>
      
    </S.Container>
  );
};

export default LandingPage;