import { useEffect, useState } from "react";
import { getSquadsMock } from "../mocks/squads.mock";
import type { Squad } from "../interfaces/squad";
import type { UseSquadsResult } from "../interfaces/useSquads";

export const useSquads = (): UseSquadsResult => {
  const [squads, setSquads] = useState<Squad[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getSquadsMock();
        setSquads(data ?? []);
      } catch (err) {
        console.error("Erro ao carregar squads", err);
        setSquads([]);
      }
    })();
  }, []);

  return { squads, setSquads };
};
