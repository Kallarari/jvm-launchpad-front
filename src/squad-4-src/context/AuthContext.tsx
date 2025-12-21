import { createContext, useContext, useState, type ReactNode } from "react";
import type { AuthContextType, User } from "./interface";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user] = useState<User | null>({
    id: "u1",
    name: "Joao Vitor Minosso",
    role: "admin",
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
