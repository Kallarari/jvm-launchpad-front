import type { SquadDevToggleProps } from "./interface";
import { ToggleButton, DevButton, SquadButton } from "./style";

export const SquadDevToggle = ({ value, onChange }: SquadDevToggleProps) => {
  return (
    <ToggleButton>
      <SquadButton
        $active={value === "squad"}
        onClick={() => onChange("squad")}
      >
        squads
      </SquadButton>

      <DevButton $active={value === "dev"} onClick={() => onChange("dev")}>
        devs
      </DevButton>
    </ToggleButton>
  );
};
