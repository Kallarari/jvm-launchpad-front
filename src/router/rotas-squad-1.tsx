import { Route } from "react-router-dom";
import LandingPage from "../pages/landing-page";

export const Squad1Routes = () => {
  return (
    <>
      <Route index element={<LandingPage />} />
      <Route path="/Squad" element={<h1>Squad exemple page</h1>} />
      <Route path="/Squad-exemple" element={<h1>Squad exemple page</h1>} />
    </>
  );
};
