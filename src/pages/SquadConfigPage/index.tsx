import { useEffect, useState } from "react";
import { getSquadsMock } from "../../squad-4-src/mocks/squads.mock";
import type { Squad } from "../../squad-4-src/interfaces/squad";
import { ButtonComponent } from "./components/ButtonComponent";
import { SquadEditionModal } from "./components/SquadEditionModal";

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
        <>
          <ul>
            {squads.map((squad) => (
              <li key={squad.id} style={{ marginBottom: "1rem" }}>
                {squad.name}
                <ButtonComponent
                  label={`Editar ${squad.name}`}
                  size="sm"
                  onClick={() => setSelectedSquad(squad)}
                />
              </li>
            ))}
          </ul>
        </>
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
