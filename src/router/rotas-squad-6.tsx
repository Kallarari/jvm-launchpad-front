import { Route, Routes } from 'react-router-dom';
import SquadsDevPage from '../pages/devs-page';
import SquadsPage from '../pages/squads-page';

export const Squad6Routes = () => {
  return (
    <Routes>
      <Route path="/squads" element={<SquadsPage />} />
      <Route path="/devs" element={<SquadsDevPage />} />
    </Routes>
  );
};
