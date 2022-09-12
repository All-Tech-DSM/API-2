import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from './pages/Cadastro';
import Consulta from './pages/Consulta';
import Erro from './pages/Erro'

import Header from "./components/Header";

function RoutesApp() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <Cadastro/> } />
            <Route path="/consulta" element={ <Consulta/> } />
            
            <Route path="*" element={ <Erro/> } />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default RoutesApp;
  