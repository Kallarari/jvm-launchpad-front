import { Route, Routes } from 'react-router-dom';
import ExamplePage from '../pages/example-page';


export const Squad5Routes = () => {
  return (
    <Routes>
      <Route path="/example" element={<ExamplePage />} />
    </Routes>
  );
};

