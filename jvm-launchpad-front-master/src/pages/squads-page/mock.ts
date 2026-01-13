import { createContext, useContext } from "react";
import { sleep } from "../../infrastructure/utils/sleep";
import type { SquadsPageData, SquadsRankingProps } from "./interface";

export const SquadsPageContext = createContext<SquadsRankingProps | undefined>(undefined)

export const useSquadsPageContext = () => {
  const context = useContext(SquadsPageContext);
  if (context === undefined) {
    throw new Error('useSquadsPageContext must be used within an SquadsPageProvider');
  }
  return context;
}

export async function getSquadsPage(): Promise<SquadsPageData> {
  await sleep(2000);

  return {
    id: "2",
    name: "Squads Page",
    description: "This is an squads page",
    squads: [
      { id: 'squad1', name: 'Alpha', points: 1500, members: [], leaderId: '1', preferredShift: 'morning', dailyTime: '4h', createdAt: '2023-01-01', updatedAt: '2023-01-10' },
      { id: 'squad2', name: 'Omega', points: 1200, members: [], leaderId: '2', preferredShift: 'afternoon', dailyTime: '3h', createdAt: '2023-02-01', updatedAt: '2023-02-10' },
      { id: 'squad3', name: 'Beta', points: 1800, members: [], leaderId: '3', preferredShift: 'night', dailyTime: '5h', createdAt: '2023-03-01', updatedAt: '2023-03-10' },
      { id: 'squad4', name: 'Gamma', points: 1700, members: [], leaderId: '3', preferredShift: 'night', dailyTime: '5h', createdAt: '2023-03-01', updatedAt: '2023-03-10' }
    ],
    users: [
      { id: 1, name: 'João', email: 'john@example.com', role: 'leader', points: 900, lastActiveAt: '2024-06-01T10:00:00Z', preferredShifts: ['morning'], availableHoursPerDay: 4, developerProfile: 'analytical', programmingLevel: 'intermediate', pictureLink: 'https://example.com/john.jpg' },
      { id: 2, name: 'Tallis', email: 'jane@example.com', role: 'leader', points: 1000, lastActiveAt: '2024-06-01T10:00:00Z', preferredShifts: ['morning'], availableHoursPerDay: 4, developerProfile: 'analytical', programmingLevel: 'intermediate', pictureLink: 'https://example.com/john.jpg' },
      { id: 3, name: 'Fábio', email: 'bob@example.com', role: 'leader', points: 800, lastActiveAt: '2024-06-01T10:00:00Z', preferredShifts: ['morning'], availableHoursPerDay: 4, developerProfile: 'analytical', programmingLevel: 'intermediate', pictureLink: 'https://example.com/john.jpg' },
      { id: 4, name: 'Caio', email: 'bob@example.com', role: 'leader', points: 800, lastActiveAt: '2024-06-01T10:00:00Z', preferredShifts: ['morning'], availableHoursPerDay: 4, developerProfile: 'analytical', programmingLevel: 'intermediate', pictureLink: 'https://example.com/john.jpg' },
    ]
  }
}
