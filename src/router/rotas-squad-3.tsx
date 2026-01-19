import { Route } from "react-router-dom";
import CadastroTecnico from "@/pages/feature-cadastro-tecnico"
export const Squad3Routes = () => {
  return (
    <>
      <Route path="cadastro-tecnico" element={<CadastroTecnico />} />
      <Route path="squad-exemple" element={<h1>Squad example page</h1>} />
    </>
  );
};
