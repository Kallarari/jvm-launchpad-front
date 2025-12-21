import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { PrivateRouteProps } from "./interface";

export function PrivateRoute({ children, role }: PrivateRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/not-authorized" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/not-authorized" replace />;
  }

  return <>{children}</>;
}
