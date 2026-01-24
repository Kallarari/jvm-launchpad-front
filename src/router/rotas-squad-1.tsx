import { Route, Outlet } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import AboutPage from "../pages/about-page";
import LoginPage from "../pages/login-page";
import { SquadFontLoader } from "../squad1-files/SquadFontLoader";

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
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Squad" element={<h1>Squad exemple page</h1>} />
      <Route path="/Squad-exemple" element={<h1>Squad exemple page</h1>} />
    </Route>
  );
};