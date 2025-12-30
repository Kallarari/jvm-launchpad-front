import { DevButton, SquadButton, ToggleButton } from "./style";
import type { ToggleProps } from "./interface";

export const SquadDevToggle = ({
  DevToggle = "Dev",
  SquadToggle = "Squad",
}: ToggleProps) => {
  return (
    <>
      <ToggleButton>
        <DevButton>
          <span>{DevToggle}</span>
        </DevButton>
        <SquadButton>
          <span>{SquadToggle}</span>
        </SquadButton>
      </ToggleButton>
    </>
  );
};
