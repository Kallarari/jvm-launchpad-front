import { normalizeSearch } from "./normalize";
import type { Squad } from "../interfaces/squad";

export type MemberWithSquad = Squad["members"][number] & {
  squadName: string;
};

export const filterSquads = (squads: Squad[], search: string): Squad[] => {
  const term = normalizeSearch(search);

  return squads.filter(
    (squad) =>
      normalizeSearch(squad.name).includes(term) ||
      squad.members.some((m) => normalizeSearch(m.name).includes(term))
  );
};

export const filterMembers = (
  squads: Squad[],
  search: string
): MemberWithSquad[] => {
  const term = normalizeSearch(search);

  return squads
    .flatMap((squad) =>
      squad.members.map((member) => ({
        ...member,
        squadName: squad.name,
      }))
    )
    .filter(
      (member) =>
        normalizeSearch(member.name).includes(term) ||
        normalizeSearch(member.squadName).includes(term)
    )
    .sort((a, b) => (b.points ?? 0) - (a.points ?? 0));
};
