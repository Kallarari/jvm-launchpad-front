import { useState } from "react";
import { ToggleButton, DevButton, SquadButton } from "./style";

export const SquadDevToggle = () => {
  const [active, setActive] = useState<"dev" | "squad">("dev");

  return (
    <ToggleButton>
      <SquadButton
        $active={active === "squad"}
        onClick={() => setActive("squad")}
      >
        squads
      </SquadButton>
      <DevButton $active={active === "dev"} onClick={() => setActive("dev")}>
        devs
      </DevButton>
    </ToggleButton>
  );
};
