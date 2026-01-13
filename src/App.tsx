import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Squad3Routes } from "./router/rotas-squad-3";


function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Squad3Routes />}>
          {Squad3Routes()}
          {/* Aqui você adiciona outras squads se quiser */}
        </Route>
      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
