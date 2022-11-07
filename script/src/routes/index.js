import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from '../pages/SignIn';

import Cadastro from '../pages/Cadastro';
import Consulta from '../pages/Consulta';
import Dados from '../pages/Dados';
import Erro from '../pages/Erro'

function RoutesApp() {
    return (
      <BrowserRouter>
        
        <Routes>
            <Route path="/" element={ <SignIn/> } />

            <Route path="/cadastro" element={ <Cadastro/> } isPrivate />
            <Route path="/consulta" element={ <Consulta/> } isPrivate />
            <Route path="/dados/:id" element={ <Dados/> } isPrivate />
            
            <Route path="*" element={ <Erro/> } isPrivate />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default RoutesApp;
  