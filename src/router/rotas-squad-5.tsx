import { Route } from "react-router-dom";
import { AcervoConteudo } from "../squad5/pages/acervoconteudo";
import { ManageAcervo } from "../squad5/pages/manageacervo";
export const Squad5Routes = () => {
  return  (
    <>
      <Route path="/acervo" element={<AcervoConteudo/>} />
      <Route path="/acervo/manage" element={<ManageAcervo/>} />
    </>
    
  );
};
