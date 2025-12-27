import * as S from './styles';
// Verifique se o Text está sendo importado corretamente (sem chaves se for export default)
import { Text } from "../../../../components-squad-1/Text/index"; 
import CodeWindowSvg from '../../../../components-squad-1/Assets/codeWindow.svg';

export const BottomSection = () => {
  return (
    <S.Container>
      <S.LinksColumn>
        {/* Título */}
        <Text font="goldman" size={24} style={{ marginBottom: '16px', color: '#fff' }}>
          Links úteis
        </Text>
        
        {/* Lista Vertical */}
        <S.LinksList>
          {/* LinkButton É O SEU BOTÃO, apenas estilizado no styles.ts */}
          <S.LinkButton size={13} font="goldman">
            Classificação de desenvolvedores
          </S.LinkButton>
          
          <S.LinkButton size={13} font="goldman">
            Classificação de Squads
          </S.LinkButton>
          
          <S.LinkButton size={13} font="goldman">
            Sobre o projeto
          </S.LinkButton>
          
          <S.LinkButton size={13} font="goldman">
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