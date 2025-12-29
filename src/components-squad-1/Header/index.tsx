import { useNavigate } from 'react-router-dom';
import * as S from './styles';

import { Button } from '../../components-squad-1/Button/Button'; 
import { Text } from '../../components-squad-1/Text/'; 
import LogoAsset from '../../components-squad-1/Assets/logo-assets/headerlogo.svg'; 

export const Header = () => {
  const navigate = useNavigate();

  return (
    // HeaderContainer é a barra fixa com fundo escuro
    <S.HeaderContainer>
      
      {/* HeaderWrapper limita a largura em 1440px e centraliza */}
      <S.HeaderWrapper>
        
        <S.LogoImage 
          src={LogoAsset} 
          alt="JVM Launchpad" 
          onClick={() => navigate('/')}
        />

        <S.NavActions>
          
          <Text 
            as={S.LinkAction} 
            // href="/cadastro" 
            size={13} 
            font="goldman" 
            color="white"
          >
            criar nova conta
          </Text>

          <Button  
            font="goldman" 
            size={16}
            onClick={() => navigate('/login')}
          >
            LOGIN
          </Button>

        </S.NavActions>

      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};