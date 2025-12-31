export interface MemberCardProps {
  name: string;
  userUrl: string;
  onRemove?: () => void;
  onMakeLeader?: () => void;
}
