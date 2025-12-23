import { createContext, useContext, type ReactNode } from "react";
import { usersMock } from "../mocks/users.mock";
import type { User } from "../interfaces/user";
import type { AuthContextType } from "./interface";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const firstAdmin: User | null =
    usersMock.find((user) => user.role === "admin") || null;

  return (
    <AuthContext.Provider value={{ user: firstAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
