import { useEffect, useState, type ReactNode } from 'react';
import type { SquadsPageData } from './interface';
import { getRankingSquadsPage, RankingSquadsPageContext } from './mock';

export const RankingSquadsPageProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<SquadsPageData | null>(null);

  useEffect(() => {
    const loadPage = async () => {
      try {
        setIsLoading(true);
        const response = await getRankingSquadsPage();
        setData(response);
      } finally {
        setIsLoading(false);
      }
    };

    loadPage();
  }, []);
  return (
    <RankingSquadsPageContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </RankingSquadsPageContext.Provider>
  );
};