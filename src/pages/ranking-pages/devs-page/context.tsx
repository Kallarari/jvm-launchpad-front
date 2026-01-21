import { useState, type ReactNode } from 'react';
import type { SquadsPageData } from '../squads-page/interface';
import { RankingDevsPageContext } from './mock';

export const RankingDevsPageProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<SquadsPageData | null>(null);

  return (
    <RankingDevsPageContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </RankingDevsPageContext.Provider>
  );
};