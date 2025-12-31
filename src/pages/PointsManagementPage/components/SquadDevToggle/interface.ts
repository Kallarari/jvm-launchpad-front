export type ToggleValue = "dev" | "squad";

export interface SquadDevToggleProps {
  value: ToggleValue;
  onChange: (value: ToggleValue) => void;
}
