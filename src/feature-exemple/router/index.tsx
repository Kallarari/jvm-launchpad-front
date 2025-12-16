import { Route, Routes } from 'react-router-dom';
import ExemplePage from '../pages/exemple-page';

export const ExempleRoutes = () => {
  return (
    <Routes>
      <Route path="/exemple" element={<ExemplePage />} />
    </Routes>
  );
};

