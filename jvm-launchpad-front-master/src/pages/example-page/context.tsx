import { createContext, useContext, useState, type ReactNode } from 'react';
import type { ExamplePageData } from './interface';

interface ExamplePageContextType {
  data: ExamplePageData | null;
  setData: (data: ExamplePageData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const ExamplePageContext = createContext<ExamplePageContextType | undefined>(undefined);

export const ExamplePageProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ExamplePageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ExamplePageContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ExamplePageContext.Provider>
  );
};

export const useExamplePageContext = () => {
  const context = useContext(ExamplePageContext);
  if (context === undefined) {
    throw new Error('useExamplePageContext must be used within an ExamplePageProvider');
  }
  return context;
};

