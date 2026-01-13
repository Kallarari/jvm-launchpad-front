export interface ExamplePageProps {
  title?: string;
}

export interface ExamplePageData {
  id: string;
  name: string;
  description?: string;
}

export interface ExamplePageContextType {
  data: ExamplePageData | null;
  setData: (data: ExamplePageData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}