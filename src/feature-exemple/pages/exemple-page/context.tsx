import { createContext, useContext, useState, type ReactNode } from 'react';
import type { ExemplePageData } from './interface';

interface ExemplePageContextType {
  data: ExemplePageData | null;
  setData: (data: ExemplePageData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const ExemplePageContext = createContext<ExemplePageContextType | undefined>(undefined);

export const ExemplePageProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ExemplePageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ExemplePageContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ExemplePageContext.Provider>
  );
};

export const useExemplePageContext = () => {
  const context = useContext(ExemplePageContext);
  if (context === undefined) {
    throw new Error('useExemplePageContext must be used within an ExemplePageProvider');
  }
  return context;
};

