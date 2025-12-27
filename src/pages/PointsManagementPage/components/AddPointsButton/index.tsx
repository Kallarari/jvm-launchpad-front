import { AddPointsStyled } from "./styles";
import type { AddPointsProps } from "./interface";

export const AddPointsButton = ({ label = "+10", onClick }: AddPointsProps) => {
  return (
    <>
      <AddPointsStyled onClick={onClick}>
        {label && <span>{label}</span>}
      </AddPointsStyled>
    </>
  );
};
