export type MemberCardProps = {
  name: string;
  score: number;

  isLeader?: boolean;
  role?: string;
  squadName?: string;

  onAdd10: () => void;
  onAdd5: () => void;
  onAdd2: () => void;
};
