import type { SquadMember } from "../../../../infrastructure/types";

export interface UserCardProps {
  member: SquadMember;
  isLeader: boolean;
  onRemove: () => void;
  onMakeLeader: () => void;
}
