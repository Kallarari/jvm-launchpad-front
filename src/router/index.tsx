import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Squad1Routes } from "./rotas-squad-1";
import { Squad2Routes } from "./rotas-squad-2";
import { Squad3Routes } from "./rotas-squad-3";
import { Squad4Routes } from "./rotas-squad-4";
import { Squad5Routes } from "./rotas-squad-5";
import { Squad6Routes } from "./rotas-squad-6";
import ExamplePage from "../pages/example-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {Squad1Routes()}
        </Route>

        <Route path="/" element={<MainLayout />}>
          {Squad2Routes()}
        </Route>

        <Route path="/" element={<MainLayout />}>
          {Squad3Routes()}
        </Route>

        <Route path="/" element={<MainLayout />}>
          {Squad4Routes()}
        </Route>
        
        <Route path="/" element={<MainLayout />}>
          {Squad5Routes()}
        </Route>
        
        <Route path="/" element={<MainLayout />}>
          {Squad6Routes()}
        </Route>

        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
