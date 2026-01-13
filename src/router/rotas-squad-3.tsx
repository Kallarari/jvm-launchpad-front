import { Route } from "react-router-dom";
import Cadastro from "../feature-cadastro/pages/cadastro";

export const Squad3Routes = () => (
  <>
    <Route path="squad" element={<h1>Squad example page</h1>} />
    <Route path="squad-exemple" element={<h1>Squad example page</h1>} />
    <Route path="cadastro" element={<Cadastro />} />
    
  </>
);
  