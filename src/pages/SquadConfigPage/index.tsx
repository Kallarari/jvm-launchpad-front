import { useState } from "react";
import type { Squad } from "../../squad-4-src/interfaces/squad";
import { SquadEditionModal } from "./components/SquadEditionModal";
import { SquadPanel } from "./components/SquadPanel";
import { ButtonComponent } from "./components/ButtonComponent";
import styles from "./styles.module.css";
import { useSquads } from "../../squad-4-src/hooks/useSquads";

export const SquadConfigPage = () => {
  const { squads, setSquads} = useSquads();
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);

  const updateSquad = (updatedSquad: Squad) => {
    setSquads((prev) =>
      prev.map((squad) => (squad.id === updatedSquad.id ? updatedSquad : squad))
    );
  };

  return (
    <>
      {!selectedSquad && (
        <main className={styles.main}>
          <div className={styles.buttons}>
            <ButtonComponent icon="ep:back" heightSize="md" />
            <ButtonComponent icon="mdi:plus" heightSize="md" />
          </div>

          {squads.map((squad) => (
            <SquadPanel
              key={squad.id}
              name={squad.name}
              number={squad.members.length}
              onClick={() => setSelectedSquad(squad)}
            />
          ))}
        </main>
      )}

      {selectedSquad && (
        <SquadEditionModal
          squad={selectedSquad}
          onClose={() => setSelectedSquad(null)}
          onSave={updateSquad}
        />
      )}
    </>
  );
};
