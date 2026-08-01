import { BadgeQuestionMark, IdCard, IdCardIcon } from 'lucide-react';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';
import Funcionamento from '../components/ui/Funcionamento';
import ServicosDisponiveis from '../components/ui/ServicosDisponiveis';



export const Home = () => {

  return (
    <main className="">
      {/* Hero Section */}
      <section className="w-full bg-[#f8fafc] mx-auto px-3 py-6 md:px-6">
        <article className="max-w-5xl mx-auto flex flex-col gap-4">
          <p className="text-xs text-red-500 text-center">
            Serviço oficial de registros - República de Angola
          </p>
          <h1 className="text-slate-900 font-black text-4xl uppercase">
            Renove o seu <br />
            <span className="text-yellow-700"> Bilhete de Identidade</span>
            <br /> <span className="underline underline-offset-2">sem filas</span>
          </h1>

          <p className="max-w-3xl text-gray-500">
            Agende o seu atendimento para renovação, primeira via ou segunda via
            do BI em Luanda. Rápido, simples e seguro.
          </p>
        </article>
      </section>

      {/* ========== SECTION SERVIÇOS ============ */}
      <section className="" id="services">
        <ServicosDisponiveis/>

        {/* =========== AREA DE CTA =========== */}
        <section className="max-w-4xl mx-auto flex items-center flex-col rounded-xl gap-2 py-4 px-2 shadow-md bg-black my-8">
          <h2 className="font-semibold text-white text-xl">
            Pronto para tratar o seu{' '}
            <span className="text-yellow-600">documento</span> ?
          </h2>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 leading-relaxed">
              Garanta o seu Atendimento sem filas de espera.
            </p>
          </div>
          <Link to="/Agendamento">
            <Button text="Agendar agora" type="button" variant="primary" />
          </Link>
        </section>
        {/*  ======================= */}

        {/* ========= SECTION COMO FUNCIONA ========= */}
        <Funcionamento/>

        {/* ============ BENEFICIOS ============ */}
        <section className="px-6 py-4 md:py-8 flex flex-col gap-6">
          <h2 className="text-center text-lg md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            Porquê marcar o seu{' '}
            <span className="text-red-600">atendimento?</span>
          </h2>
          <p className="text-gray-500 max-w-3xl text-center text-sm m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            nihil. Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="beneficio">
              <div className="w-12 h-12 rounded-[14px] bg-linear-to-b from-red-500 from-20% via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shrink-0 text-white">
                <BadgeQuestionMark />
              </div>
              <div>
                <h4 className="text-yellow-700 font-medium">
                  Lorem, ipsum dolor.
                </h4>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div class="beneficio">
              <div className="w-12 h-12 rounded-[14px] bg-linear-to-b from-red-500 from-20% via-yellow-600 to-slate-900 flex items-center justify-center mb-5  shrink-0 text-white">
                <BadgeQuestionMark />
              </div>
              <div>
                <h4 className="text-yellow-700 font-medium">
                  Lorem, ipsum dolor.
                </h4>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit..
                </p>
              </div>
            </div>

            <div class="beneficio">
              <div className="w-12 h-12 rounded-[14px] bg-linear-to-b from-red-500 from-20% via-yellow-600 to-slate-900 flex items-center justify-center mb-5  shrink-0 text-white">
                <BadgeQuestionMark />
              </div>
              <div>
                <h4 className="text-yellow-700 font-medium">
                  Lorem, ipsum dolor.
                </h4>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
