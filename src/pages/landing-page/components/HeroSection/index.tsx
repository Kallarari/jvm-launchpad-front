import * as S from './styles';
import { Button } from "../../../../squad1-files/components/Button";
import { Text } from "../../../../squad1-files/components/Text";

import JsIcon from '../../../../squad1-files/Assets/logo-assets/jslogo.svg';
import TsIcon from '../../../../squad1-files/Assets/logo-assets/tslogo.svg';
import NodeIcon from '../../../../squad1-files/Assets/logo-assets/nodelogo.svg';

export const HeroSection = () => {
  return (
    <S.Container>

      <S.LeftContent>
        <S.TagOnline>Sistema Online</S.TagOnline>

        <S.TitleWrapper>
          <Text 
            as="span" 
            font="goldman" 
            size={64}
            color="white" 
            style={{ 
              lineHeight: '1', 
              marginBottom: '4px',
            }}
          >
            Bem-vindo ao
          </Text>

          <S.JvmTitle>
            <Text 
              as="div" 
              font="goldman" 
              size={70}
              color="#E63946"
              style={{ 
                lineHeight: '0.9',
                marginRight: '-5px',
                marginBottom: '5px',
              }}
            >
              JVM Launchpad
            </Text>
          </S.JvmTitle>
          
          <S.ButtonGroup>
            <Button to="/cadastrar" size={13} font="goldman" style={{ width: '160px' }}>
              CADASTRAR
            </Button>
            <Button to="/login" size={13} font="goldman" style={{ width: '160px' }}>
              LOGIN
            </Button>
          </S.ButtonGroup>

        </S.TitleWrapper>
      </S.LeftContent>

      <S.RightContent>
        <S.TechIcon>
          <img src={JsIcon} alt="Javascript" />
        </S.TechIcon>
        
        <S.TechIcon>
          <img src={NodeIcon} alt="Node.js" />
        </S.TechIcon>

        <S.TechIcon>
          <img src={TsIcon} alt="Typescript" />
        </S.TechIcon>
      </S.RightContent>

    </S.Container>
  );
};