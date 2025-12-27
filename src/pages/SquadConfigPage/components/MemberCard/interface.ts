export interface MemberCardProps {
  name: string;
  githubUrl: string;
  onRemove?: () => void;
  onMakeLeader?: () => void;
}
