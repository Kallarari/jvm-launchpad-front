import { sleep } from "../../infrastructure/utils/sleep";
import type { Squad } from "../interfaces/squad";
import { usersMock } from "./users.mock";

export async function getSquadsMock(): Promise<Squad[]> {
  await sleep(1000);

  return [
    {
      id: "1",
      name: "Squad 1",
      dailyTime: "15:00",
      preferredShift: "Tarde",
      members: [usersMock[2], usersMock[3], usersMock[4]],
      squadPoints: 295,
    },
    {
      id: "2",
      name: "Squad 2",
      dailyTime: "18:00",
      preferredShift: "Tarde",
      members: [usersMock[5], usersMock[6], usersMock[7]],
      squadPoints: 285,
    },
    {
      id: "3",
      name: "Squad 3",
      dailyTime: "15:00",
      preferredShift: "Tarde",
      members: [usersMock[8], usersMock[9], usersMock[10]],
      squadPoints: 325,
    },
    {
      id: "4",
      name: "Squad 4",
      dailyTime: "08:00",
      preferredShift: "Manhã",
      members: [usersMock[11], usersMock[12], usersMock[13]],
      squadPoints: 285,
    },
    {
      id: "5",
      name: "Squad 5",
      dailyTime: "19:00",
      preferredShift: "Noite",
      members: [usersMock[14], usersMock[15], usersMock[16]],
      squadPoints: 302,
    },
    {
      id: "6",
      name: "Squad 6",
      dailyTime: "19:00",
      preferredShift: "Noite",
      members: [usersMock[17], usersMock[18], usersMock[19]],
      squadPoints: 310,
    },
  ];
}