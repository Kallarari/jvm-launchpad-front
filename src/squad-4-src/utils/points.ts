import type { Squad } from "../interfaces/squad";

export const addSquadPoints = (
  squads: Squad[],
  squadId: string,
  points: number
): Squad[] =>
  squads.map((squad) =>
    squad.id === squadId
      ? { ...squad, squadPoints: squad.squadPoints + points }
      : squad
  );

export const addMemberPoints = (
  squads: Squad[],
  memberId: string,
  points: number
): Squad[] =>
  squads.map((squad) => ({
    ...squad,
    members: squad.members.map((member) =>
      member.id === memberId
        ? { ...member, points: (member.points ?? 0) + points }
        : member
    ),
  }));
