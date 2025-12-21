export interface User {
  id: string;
  name: string;
  role: "admin" | "user";
}

export interface AuthContextType {
  user: User | null;
}