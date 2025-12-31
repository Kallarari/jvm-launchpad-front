import { Route } from "react-router-dom";
import { SquadConfigPage } from "../pages/SquadConfigPage";
import { PrivateRoute } from "../squad-4-src/components/PrivateRoute";
import { MainLayout } from "../squad-4-src/components/MainLayout";
import "../squad-4-src/styles/reset.css";
import { PointsManagementPage } from "../pages/PointsManagementPage";

export const Squad4Routes = () => {
  return (
    <>
      <Route element={<MainLayout />}>
        <Route
          path="/squad-config"
          element={
            <PrivateRoute role="admin">
              <SquadConfigPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/points-management"
          element={
            <PrivateRoute role="admin">
              <PointsManagementPage />
            </PrivateRoute>
          }
        />

        <Route path="/not-authorized" element={<h1>Nao autorizado</h1>} />
      </Route>
    </>
  );
};
