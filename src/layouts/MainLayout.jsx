import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Building, IdCard } from "lucide-react";

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-12 relative">
        {/* Serve com espeça reservado - de acordo a rota */}
        <Outlet />
      </main>

      <footer className="w-full bg-white border-t border-gray-100">
        <section class="grid grid-cols-3 gap-4 py-6 px-4 text-gray-500">
          <article>
            <h4 className="font-bold text-slate-700">GestBI-Angola</h4>
            <p className="text-sm">Sistema de gestão de marcação para renovação de Bilhete de Identidade em Luanda.</p>
          </article>

          <article>
            <h4 className="font-bold text-slate-700">Links Rápidos</h4>
            <ul className="text-sm">
              <li>Informações</li>
              <li>Agendamento</li>
              <li>Sobre Nós</li>
              <li>Contacto</li>
            </ul>
          </article>

          <article>
            <h4 className="font-bold text-slate-700">Empresas</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article className="col-span-3 flex justify-between text-xs">
            <p>Todos os direitos reservados</p>
            <p className="flex items-center gap-1"> <IdCard />GestBI-Serviço oficial de registro.</p>
          </article>
        </section>
      </footer>
    </>
  )
}