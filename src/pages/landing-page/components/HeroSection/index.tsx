import * as S from './styles';
import { Button } from "../../../../components-squad-1/Button/Button";
import { Text } from "../../../../components-squad-1/Text/index";

import JsIcon from '../../../../components-squad-1/Assets/logo-assets/jslogo.svg';
import TsIcon from '../../../../components-squad-1/Assets/logo-assets/tslogo.svg';
import NodeIcon from '../../../../components-squad-1/Assets/logo-assets/nodelogo.svg';

export const HeroSection = () => {
  return (
    <S.Container>

      <S.LeftContent>
        <S.TagOnline>Sistema Online</S.TagOnline>
        
        {/* Removi o marginBottom: 24px daqui para aproximar os botões */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
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

          <Text 
            as="span" 
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
        </div>

        <S.ButtonGroup>
          <Button size={13} font="goldman" style={{ width: '200px' }}>
            CADASTRAR
          </Button>
          <Button size={13} font="goldman" style={{ width: '200px' }}>
            LOGIN
          </Button>
        </S.ButtonGroup>
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