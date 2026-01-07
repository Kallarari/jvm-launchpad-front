import { Outlet } from "react-router-dom";
//import { AcervoConteudo } from "../squad5/pages/acervoconteudo";
//import { ManageAcervo } from "../squad5/pages/manageacervo";
//import { ProtectedLayout } from "../squad5/components/ProtectedLayout";
import { AuthProvider } from "../squad5/context/authContext";
export const Squad5Routes = () => {
  return (

    <AuthProvider>

      <Outlet/>
    </AuthProvider>

    // <>

    //   <Route path="/acervo" element={<AcervoConteudo />} />

    //   <Route element={<ProtectedLayout />}>
    //     <Route path="/acervo/manage" element={<ManageAcervo />} />

    //   </Route>

    // </>

  );
};
