import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../feature-cadastro/pages/cadastro";
import { Squad3Routes } from "./rotas-squad-3";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cadastro/>}>
        {Squad3Routes()}
      </Route>
      
      
    </Routes>
  </BrowserRouter>
);
