import type { EditSquadCardProps } from "./interface";
import { EditCard } from "./styles";

export const EditSquadCard = ({ onClick }: EditSquadCardProps) => {
  return <EditCard onClick={onClick}> Editar dados da Squad </EditCard>;
};
