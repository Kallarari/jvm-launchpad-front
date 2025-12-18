import { Route, Routes } from 'react-router-dom';
import ExamplePage from '../pages/example-page';


export const Squad3Routes = () => {
  return (
    <Routes>
      <Route path="/example" element={<ExamplePage />} />
    </Routes>
  );
};

