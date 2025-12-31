import type { Squad } from "../../../../squad-4-src/interfaces/squad";

export interface SquadEditionModalProps {
  squad: Squad;
  onClose: () => void;
  onSave: (updatedSquad: Squad) => void;
}
