export interface User {
  id: number;
  name: string;
  email: string;
  points: number;
  lastActiveAt: string;
  squadId?: string;
  phone?: string;
  preferredShifts: ('morning' | 'afternoon' | 'night')[];
  availableHoursPerDay: number;
  developerProfile: 'analytical' | 'communicator' | 'executor' | 'creative' | 'organized';
  programmingLevel: 'basic' | 'intermediate' | 'with_any_contact' | 'never_worked_with_but_with_contact';
  githubLink?: string;
  linkedinLink?: string;
  discordNick?: string;
  prLink?: string;
  pictureLink: string;
  role: 'admin' | 'programer' | 'leader' | 'applicant';
}
export interface SquadMember {
  id: string;
  name: string;
  points: number;
  isLeader: boolean;
}

export interface Squad {
  id: string;
  name: string;
  points: number;
  members: SquadMember[];
  leaderId: string;
  preferredShift: 'morning' | 'afternoon' | 'night';
  dailyTime: string;
  createdAt: string;
  updatedAt: string;
}