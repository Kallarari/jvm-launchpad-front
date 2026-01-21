import type { Squad, User } from "../../../infrastructure";

export interface BasePageData {
  id: string;
  name: string;
  description?: string;
}

export const podiumHeight = {
  first: 80,
  second: 40,
  third: 20,
} as const;

export const podiumMargim = {
  first: 3,
  second: 0.5,
  third: -1
} as const

export type PodiumPositionType = 'first' | 'second' | 'third';

export interface SquadsPageData extends BasePageData {
  users?: User[];
  squads?: Squad[];
  src?: string | undefined;
}

export interface SquadsRankingProps {
  data: SquadsPageData | null;
  setData: (data: SquadsPageData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export interface SquadsPageContentProps {
  dev?: boolean;
}