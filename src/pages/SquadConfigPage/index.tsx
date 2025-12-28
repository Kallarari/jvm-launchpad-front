import { useEffect, useState } from "react";
import { getSquadsMock } from "../../squad-4-src/mocks/squads.mock";
import type { Squad } from "../../squad-4-src/interfaces/squad";
import { SquadEditionModal } from "./components/SquadEditionModal";
import { SquadPanel } from "./components/SquadPanel";
import { ButtonComponent } from "./components/ButtonComponent";
import styles from "./styles.module.css";

export const SquadConfigPage = () => {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);

  useEffect(() => {
    getSquadsMock().then(setSquads);
  }, []);

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
