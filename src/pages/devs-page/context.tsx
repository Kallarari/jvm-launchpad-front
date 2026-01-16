import { useState, type ReactNode } from 'react';
import type { SquadsPageData } from '../squads-page/interface';
import { SquadsDevPageContext } from './mock';

export const SquadsDevPageProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<SquadsPageData | null>(null);

  return (
    <SquadsDevPageContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SquadsDevPageContext.Provider>
  );
};