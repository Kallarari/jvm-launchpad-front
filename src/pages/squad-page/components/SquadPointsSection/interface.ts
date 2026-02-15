export interface SquadStats {
  pontos: number;
  colocacao: number;
}

export interface SquadStatsProps {
  stats: SquadStats;
  className?: string;
}