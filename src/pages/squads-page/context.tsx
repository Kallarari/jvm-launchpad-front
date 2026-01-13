import { useEffect, useState, type ReactNode } from 'react';
import type { SquadsPageData } from './interface';
import { getSquadsPage, SquadsPageContext } from './mock';

export const SquadsPageProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<SquadsPageData | null>(null);

  useEffect(() => {
    const loadPage = async () => {
      try {
        setIsLoading(true);
        const response = await getSquadsPage();
        setData(response);
      } finally {
        setIsLoading(false);
      }
    };

    loadPage();
  }, []);
  return (
    <SquadsPageContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SquadsPageContext.Provider>
  );
};