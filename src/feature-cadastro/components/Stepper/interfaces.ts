export interface Step {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
  active?: boolean;
}