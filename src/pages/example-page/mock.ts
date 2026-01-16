import { createContext, useContext } from "react";
import { sleep } from "../../infrastructure/utils/sleep";
import type { ExamplePageContextType, ExamplePageData } from "./interface";

export const ExamplePageContext = createContext<ExamplePageContextType | undefined>(undefined);

export const useExamplePageContext = () => {
  const context = useContext(ExamplePageContext);
  if (context === undefined) {
    throw new Error('useExamplePageContext must be used within an ExamplePageProvider');
  }
  return context;
};

export async function getExamplePageData(): Promise<ExamplePageData> {
  await sleep(2000);

  return {
    name: "Example Page",
    description: "This is an example page",
    id: "1",
  };
}
