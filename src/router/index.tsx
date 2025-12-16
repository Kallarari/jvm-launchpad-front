import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExempleRoutes } from '../feature-exemple/router';
import ExemplePage from '../feature-exemple/pages/exemple-page';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExemplePage />} />
        <Route path="/*" element={<ExempleRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

