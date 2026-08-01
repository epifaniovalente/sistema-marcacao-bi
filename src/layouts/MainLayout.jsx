import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

export const MainLayout=()=>{
  return(
    <>
    <header>
      <Header/>
    </header>
    <main className="mt-12">
      {/* Serve com espeça reservado - de acordo a rota */}
      <Outlet/>
    </main>

    <footer>
      <section class="container-footer footer-grid">
        <article>
          <h4 className="">GestBI-Angola</h4>
            <p className="">Sistema de gestão de marcação para renovação de Bilhete de Identidade em Luanda.</p>
        </article>

        <article>
          <h4 className="">Links Rápidos</h4>
            <ul className="">
                <li>Informações</li>
                <li>Agendamento</li>
                <li>Sobre Nós</li>
                <li>Contacto</li>
            </ul>
        </article>

        <article>
          <h4>Empresas</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
      <article>
<p>Todos os direitos reservados</p>
<p>GestBI-Serviço oficial de registro.</p>
      </article>
      </section>
    </footer>
    </>
  )
}