import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

export const MainLayout=()=>{
  return(
    <>
    <header>
      <Header/>
    </header>
    <main className="mt-16">
      {/* Serve com espeça reservado - de acordo a rota */}
      <Outlet/>
    </main>

    <footer>
      Rodape
    </footer>
    </>
  )
}