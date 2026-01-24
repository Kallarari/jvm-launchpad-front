import { useNavigate } from 'react-router-dom';
import * as S from './styles';

import { Button } from '../Button'; 
import { Text } from '../Text'; 
import LogoAsset from '../../Assets/logo-assets/headerlogo.svg'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      
      <S.HeaderWrapper>
        
        <S.LogoImage 
          src={LogoAsset} 
          alt="JVM Launchpad" 
          onClick={() => navigate('/')}
        />

        <S.NavActions>
          
          <Text 
            as={S.LinkAction} 
            size={13} 
            font="goldman" 
            color="white"
          >
            criar nova conta
          </Text>

          <Button  
            font="goldman" 
            size={13}
            style={{ width: '60px' }}
            to="/login"
          >
            LOGIN
          </Button>

        </S.NavActions>

      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};