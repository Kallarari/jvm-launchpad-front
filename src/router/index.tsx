import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Squad1Routes } from './rotas-squad-1';
import { Squad2Routes } from './rotas-squad-2';
import { Squad3Routes } from './rotas-squad-3';
import { Squad4Routes } from './rotas-squad-4';
import { Squad5Routes } from './rotas-squad-5';
import { Squad6Routes } from './rotas-squad-6';
import ExamplePage from '../pages/example-page';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/" element={<Squad1Routes />} />
        <Route path="/" element={<Squad2Routes />} />
        <Route path="/" element={<Squad3Routes />} />
        <Route path="/" element={<Squad4Routes />} />
        <Route path="/" element={<Squad5Routes />} />
        <Route path="/" element={<Squad6Routes />} />
        <Route path="/*" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
};

