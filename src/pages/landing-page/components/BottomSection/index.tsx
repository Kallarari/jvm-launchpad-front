import * as S from './styles';
import { Text } from "../../../../squad1-files/components/Text"; 
import { useNavigate } from 'react-router-dom';
import CodeWindowSvg from '../../../../squad1-files/Assets/codeWindow.svg';

export const BottomSection = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.LinksColumn>
        <Text as="div" font="goldman" size={24} style={{ marginBottom: '10px', color: '#fff' }}>
          Links úteis
        </Text>
        <S.LinksList>
          <S.LinkButton>
            Classificação de desenvolvedores
          </S.LinkButton>
          
          <S.LinkButton>
            Classificação de Squads
          </S.LinkButton>
          
          <S.LinkButton onClick={() => navigate('/About')}>
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