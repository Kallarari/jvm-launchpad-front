import { Route } from "react-router-dom";
import RankingDevsPage from "../pages/ranking-pages/devs-page";
import RankingSquadsPage from "../pages/ranking-pages/squads-page";

export const Squad6Routes = () => {
  return (
    <Route path="ranking">
      <Route path="devs" element={<RankingDevsPage />} />
      <Route path="squads" element={<RankingSquadsPage />} />
    </Route>
  );
};
