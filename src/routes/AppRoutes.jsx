import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Informacao } from '../pages/Informacao';
import { Sobre } from '../pages/Sobre';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import { MainLayout } from '../layouts/MainLayout';
import Agendamento from '../pages/Agendamento';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* Rota Publica */}
      <Route path="Login" element={<Login/>}/>

      {/* Rotas com layout */}
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/Informacao" element={<Informacao />} />
        <Route path="/Agendamento" element={<Agendamento/>}/>
        <Route path="/Sobre" element={<Sobre />} />
      </Route>

      {/* Pagina 404 */}
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </BrowserRouter>
  );
};
