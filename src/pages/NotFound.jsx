import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import { Bug, CloudAlert } from "lucide-react";

export const NotFound = () => {
  return (
    <main className="flex items-center justify-center h-screen w-full">
      <section className="flex flex-col gap-4 justify-center items-center text-gray-500">
        <h1 className="text-2xl font-bold font-serif">Erro 404</h1>


        <CloudAlert className="text-red-500 animate-bounce" />
        <p>Página não encontrada, ou seja, Esta página não existe</p>
        <NavLink>
          <Link to="/">
            <Button type="button" variant="danger" text="Voltar ao início" />
          </Link>
        </NavLink>
      </section>

    </main>
  );
};
