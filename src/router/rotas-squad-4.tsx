import { Route } from "react-router-dom";
import { SquadConfigPage } from "../pages/SquadConfigPage";

export const Squad4Routes = () => {
  return (
    <>
      <Route path="/squad-config" element={<SquadConfigPage />} />
      <Route path="/Squad-exemple" element={<h1>Squad exemple page</h1>} />
    </>
  );
};
