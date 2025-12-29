import * as S from './styles';
import { Text } from "../../../../components-squad-1/Text/index"; 
import CodeWindowSvg from '../../../../components-squad-1/Assets/codeWindow.svg';

export const BottomSection = () => {
  return (
    <S.Container>
      <S.LinksColumn>
        <Text font="goldman" size={24} style={{ marginBottom: '24px', color: '#fff' }}>
          Links úteis
        </Text>
        <S.LinksList>
          <S.LinkButton>
            Classificação de desenvolvedores
          </S.LinkButton>
          
          <S.LinkButton>
            Classificação de Squads
          </S.LinkButton>
          
          <S.LinkButton>
            Sobre o projeto
          </S.LinkButton>
          
          <S.LinkButton>
            Conteúdo gratuito
          </S.LinkButton>
        </S.LinksList>
      </S.LinksColumn>

      <S.CodeSectionWrapper>
        <S.StartTab>
          Começar agora
        </S.StartTab>
        <S.CodeImage src={CodeWindowSvg} alt="Preview do Código" />
      </S.CodeSectionWrapper>
    </S.Container>
  );
};