import { createContext, type ReactNode } from "react";
import { usersMock } from "../mocks/users.mock";
import type { User } from "../interfaces/user";
import type { AuthContextType } from "./interface";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const firstAdmin: User | null =
    usersMock.find((user) => user.role === "admin") || null;

  return (
    <AuthContext.Provider value={{ user: firstAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
