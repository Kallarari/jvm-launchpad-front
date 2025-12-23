import type { User } from "../interfaces/user";

export interface AuthContextType {
  user: User | null;
}