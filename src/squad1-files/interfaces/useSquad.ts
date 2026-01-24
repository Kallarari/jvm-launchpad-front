import type { Squad } from "./squad";

export interface UseSquadsResult {
  squads: Squad[];
  setSquads: React.Dispatch<React.SetStateAction<Squad[]>>;
}