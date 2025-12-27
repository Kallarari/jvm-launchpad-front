import { Background } from "../../components-squad-1/Background";
import { Header } from "../../components-squad-1/Header";
import { HeroSection } from "../../pages/landing-page/components/HeroSection";
import { BottomSection } from "../../pages/landing-page/components/BottomSection";

import * as S from './style.module';

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