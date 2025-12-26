import { Route, Outlet } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import { SquadFontLoader } from "../components-squad-1/SquadFontLoader"; 

const SquadLayout = () => {
  return (
    <>
      <SquadFontLoader />
      <Outlet />
    </>
  );
};

export const Squad1Routes = () => {
  return (
    <Route element={<SquadLayout />}>
      <Route index element={<LandingPage />} />
      {/* <Route path="/Login" element={<LoginPage />} /> */}
      <Route path="/Squad" element={<h1>Squad exemple page</h1>} />
      <Route path="/Squad-exemple" element={<h1>Squad exemple page</h1>} />
    </Route>
  );
};