import { sleep } from "../../infrastructure/utils/sleep";
import type { Squad, User } from "../../infrastructure/types";

export async function getSquadById(id: string): Promise<Squad> {
  await sleep(1000);
  return {
    id,
    name: "Alpha Team",
    points: 150,
    members: [],
    leaderId: "",
    preferredShift: "morning",
    dailyTime: "09:00",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export async function getRecommendedUsers(filters: {
  shift: string;
  level: string;
}): Promise<User[]> {
  void filters;

  await sleep(1500);
  return [
    {
      id: 1,
      name: "Lindon Jhonson",
      role: "programer",
      preferredShifts: ["morning"],
      programmingLevel: "intermediate",
      developerProfile: "executor",
      availableHoursPerDay: 4,
      pictureLink: "https://github.com/lindon.png",
    },
    {
      id: 2,
      name: "João Jhonson",
      role: "applicant",
      preferredShifts: ["morning"],
      programmingLevel: "intermediate",
      developerProfile: "executor",
      availableHoursPerDay: 4,
      pictureLink: "https://github.com/lindon.png",
    },
    {
      id: 3,
      name: "Maria Jhonson",
      role: "applicant",
      preferredShifts: ["afternoon"],
      programmingLevel: "intermediate",
      developerProfile: "executor",
      availableHoursPerDay: 4,
      pictureLink: "https://github.com/lindon.png",
    },
    {
      id: 4,
      name: "Marcos Jhonson",
      role: "applicant",
      preferredShifts: ["night"],
      programmingLevel: "intermediate",
      developerProfile: "executor",
      availableHoursPerDay: 4,
      pictureLink: "https://github.com/lindon.png",
    },
    {
      id: 5,
      name: "Rafael Gomes",
      role: "applicant",
      preferredShifts: ["night"],
      programmingLevel: "intermediate",
      developerProfile: "executor",
      availableHoursPerDay: 4,
      pictureLink: "https://github.com/lindon.png",
    },
    {
      id: 6,
      name: "Roberto Silva",
      role: "programer",
      preferredShifts: ["night"],
      programmingLevel: "intermediate",
      developerProfile: "executor",
      availableHoursPerDay: 4,
      pictureLink: "https://github.com/lindon.png",
    },
  ] as User[];
}
