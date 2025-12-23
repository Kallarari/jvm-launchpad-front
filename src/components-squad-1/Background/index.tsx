import { 
  BackgroundWrapper, 
  CentralizedContainer, // Importar o novo container
  GridImg, 
  GlowBottomLeft, 
  GlowTopRight, 
  LinePrimary,
  LineSecondary
} from './styles';

// Importe seus SVGs aqui
import gridSvg from '../../components-squad-1/Background/Assets/grid.svg';
import linesSvg from '../../components-squad-1/Background/Assets/line.svg';
import glowLeftSvg from '../../components-squad-1/Background/Assets/radial-top-right.svg';
import glowRightSvg from '../../components-squad-1/Background/Assets/radial-bottom-left.svg';

export const Background = () => {
  return (
    <BackgroundWrapper>
      {/* O CentralizedContainer garante que em monitores gigantes, 
          o design fique no meio (igual 1920px) e o resto seja preto */}
      <CentralizedContainer>
        
        <GlowBottomLeft src={glowLeftSvg} alt="" />
        <GlowTopRight src={glowRightSvg} alt="" />

        <GridImg src={gridSvg} alt="" />

        <LinePrimary src={linesSvg} alt="" />
        <LineSecondary src={linesSvg} alt="" />
        
      </CentralizedContainer>
    </BackgroundWrapper>
  );
};