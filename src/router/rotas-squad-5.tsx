import { Route, Routes } from 'react-router-dom';
import ExamplePage from '../pages/example-page';
import { AcervoConteudo } from '../squad5/pages/acervoconteudo';
import { ManageAcervo } from '../squad5/pages/manageacervo';

export const Squad5Routes = () => {
  return (
    <Routes>
      <Route path="/example" element={<ExamplePage />} />
      <Route index element={<AcervoConteudo />} />
      <Route path='/manage' element={<ManageAcervo/>}/>
    </Routes>
  );
};

