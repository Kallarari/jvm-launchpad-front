import { Route, Navigate, Outlet } from "react-router-dom";
import { SquadEditProvider } from "../pages/squad-edit/context";
import SquadEditPage from "../pages/squad-edit";
import { useAppStore } from "../infrastructure/store";
import { GlobalStyle } from "../pages/squad-edit/styles.module";
import RankingSquadsPage from "../pages/ranking-pages/squads-page";
import RankingDevsPage from "../pages/ranking-pages/devs-page";
import { NewDevsPage } from "../pages/NewDevs";

const AdminRoutes = () => {
  const user = useAppStore((state) => state.user);

  if (user?.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export const Squad6Routes = () => {
  return (
    <>
      {/* Rotas públicas */}
      <Route path="/ranking-squads" element={<RankingSquadsPage />} />
      <Route path="/ranking-devs" element={<RankingDevsPage />} />

      <Route path="/unauthorized" element={<div>Acesso não autorizado</div>} />

      {/* Rotas admin */}
      <Route element={<AdminRoutes />}>
        <Route
          path="/squad-edit/:id"
          element={
            <SquadEditProvider>
              <GlobalStyle />
              <SquadEditPage />
            </SquadEditProvider>
          }
        />

        <Route
          path="/new-devs"
          element={
            <>
              <GlobalStyle />
              <NewDevsPage />
            </>
          }
        />
      </Route>
    </>
  );
};
