import { createContext, useContext } from "react";
import { sleep } from "../../../infrastructure/utils/sleep";
import type { SquadsPageData, SquadsRankingProps } from "../squads-page/interface";

export const RankingDevsPageContext = createContext<SquadsRankingProps | undefined>(undefined)

export const useRankingDevsPageContext = () => {
  const context = useContext(RankingDevsPageContext);
  if (context === undefined) {
    throw new Error('useRankingDevsPageContext must be used within an RankingDevsPageProvider');
  }
  return context;
}

export async function getSquadsPage(): Promise<SquadsPageData> {
  await sleep(2000);

  return {
    id: "2",
    name: "Squads Dev Page",
    description: "This is an squads dev page",
    squads: [
      { id: 'squad1', name: 'Alpha', points: 1500, members: [], leaderId: '1', preferredShift: 'morning', dailyTime: '4h', createdAt: '2023-01-01', updatedAt: '2023-01-10' },
      { id: 'squad2', name: 'Beta', points: 1200, members: [], leaderId: '2', preferredShift: 'afternoon', dailyTime: '3h', createdAt: '2023-02-01', updatedAt: '2023-02-10' },
      { id: 'squad3', name: 'Gamma', points: 1800, members: [], leaderId: '3', preferredShift: 'night', dailyTime: '5h', createdAt: '2023-03-01', updatedAt: '2023-03-10' },
      { id: 'squad4', name: 'Gamma', points: 1700, members: [], leaderId: '3', preferredShift: 'night', dailyTime: '5h', createdAt: '2023-03-01', updatedAt: '2023-03-10' }
    ],
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'leader', points: 800, lastActiveAt: '2024-06-01T10:00:00Z', preferredShifts: ['morning'], availableHoursPerDay: 4, developerProfile: 'analytical', programmingLevel: 'intermediate', pictureLink: 'https://example.com/john.jpg' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'leader', points: 800, lastActiveAt: '2024-06-01T10:00:00Z', preferredShifts: ['morning'], availableHoursPerDay: 4, developerProfile: 'analytical', programmingLevel: 'intermediate', pictureLink: 'https://example.com/john.jpg' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'leader', points: 800, lastActiveAt: '2024-06-01T10:00:00Z', preferredShifts: ['morning'], availableHoursPerDay: 4, developerProfile: 'analytical', programmingLevel: 'intermediate', pictureLink: 'https://example.com/john.jpg' },
    ]
  }
}
