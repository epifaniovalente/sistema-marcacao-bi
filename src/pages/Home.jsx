import { BadgeQuestionMark, IdCard, IdCardIcon } from 'lucide-react';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <main className="">
      {/* Hero Section */}
      <section className="w-full bg-[#f8fafc] mx-auto px-3 py-6 md:px-6">
        <article className="max-w-5xl mx-auto flex flex-col gap-4">
          <p className="text-xs text-red-500 text-center">
            Serviço oficial de registros - República de Angola
            </p>
          <h1 className="text-slate-900 font-bold text-2xl">
              Renove o seu 
              <span className="text-yellow-500"> Bilhete de Identidade</span>
              <br /> sem filas
          </h1>

          <p className="max-w-3xl text-gray-500">
            Agende o seu atendimento para renovação, primeira via ou segunda via
            do BI em Luanda. Rápido, simples e seguro.
          </p>
        </article>
      </section>

      {/* ========== SECTION SERVIÇOS ============ */}
      <section className="" id="services">
        <section className=" px-6 py-4 md:py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header  */}
            <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-red-700 mb-3">
              Serviços disponíveis
            </p>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
              O que podemos fazer por
              <span className="text-red-600"> si</span>
            </h2>
            <p className="text-center text-gray-500 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
              Selecione o serviço pretendido para iniciar a sua marcação
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <article className="bg-white border border-gray-200/80 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-200 cursor-none">
                {/* ICONE */}
                <div class="w-13 h-13 w-[52px] h-[52px] bg-indigo-50 rounded-[14px] flex items-center justify-center mb-5">
                  <IdCard className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-amber-500 mb-2 text-left">
                  Renovação
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 text-left">
                  Renove o seu Bilhete de Identidade quando este estiver
                  expirado ou prestes a expirar.
                </p>

                <ul className="space-y-2 mb-7">
                  <li class="flex items-center gap-2 text-[13.5px] text-gray-600">
                    <IdCard className="w-4 h-4 text-amber-600 shrink-0" /> BI
                    expirado ou a expirar
                  </li>
                  <li class="flex items-center gap-2 text-[13.5px] text-gray-600">
                    <IdCard className="w-4 h-4 text-amber-600 shrink-0" />{' '}
                    Actualização de dados pessoais
                  </li>
                  <li class="flex items-center gap-2 text-[13.5px] text-gray-600">
                    <IdCard className="w-4 h-4 text-amber-600 shrink-0" /> Nova
                    fotografia
                  </li>
                </ul>
              </article>

              {/* <!-- Card: Segunda Via --> */}
              <article class="bg-white border border-gray-200/80 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                {/* ICONE */}
                <div class="w-[52px] h-[52px] bg-indigo-50 rounded-[14px] flex items-center justify-center mb-5">
                  <IdCard className="w-4 h-4 text-amber-600 shrink-0" />
                </div>

                <h3 className="text-lg font-bold text-amber-500 mb-2 text-left">
                  Segunda Via
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5 text-left">
                  Solicite uma segunda via do seu BI em caso de perda, roubo ou
                  deterioração.
                </p>

                <ul className="space-y-2 mb-7">
                  <li className="flex items-center gap-2 text-[13.5px] text-gray-600">
                    <IdCard className="w-4 h-4 text-amber-600 shrink-0" />
                    Perda ou roubo do BI
                  </li>
                  <li className="flex items-center gap-2 text-[13.5px] text-gray-600">
                    <IdCard className="w-4 h-4 text-amber-600 shrink-0" />
                    BI danificado ou ilegível
                  </li>
                  <li className="flex items-center gap-2 text-[13.5px] text-gray-600">
                    <IdCard className="w-4 h-4 text-amber-600 shrink-0" />
                    Emissão de duplicado
                  </li>
                </ul>
              </article>
            </section>
          </div>
        </section>

        {/* =========== AREA DE CTA =========== */}
        <section className="max-w-4xl mx-auto flex items-center flex-col rounded-xl gap-2 py-4 px-2 shadow-md bg-black my-8">
          <h2 className="font-semibold text-white text-xl">
            Pronto para tratar o seu{' '}
            <span className="text-yellow-500">documento</span> ?
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
        <section className="relative bg-black py-20 px-6 overflow-hidden">
          <div className="relative max-w-4xl mx-auto">
            <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-yellow-500 mb-3">
              Processo simples
            </p>
            <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
              Como <span className="text-yellow-500">Funciona</span>
            </h2>
            <p className="text-center text-gray-500 text-sm md:text-base max-w-sm mx-auto mb-14 leading-relaxed">
              4 passos simples para agendar o seu atendimento
            </p>

            {/* PASSOS */}

            <article class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
              {/* <!-- Passo 1 --> */}
              <div class="flex flex-col items-center text-center gap-0">
                <div className="w-[76px] h-[76px] rounded-[20px] bg-linear-to-b from-red-500 via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shrink-0">
                  <IdCardIcon />
                </div>
                <p className="text-yellow-500 text-xs font-semibold mb-1.5 tracking-wide">
                  Passo 1
                </p>
                <h3 className="text-white text-[15px] font-bold mb-1.5 leading-snug">
                  Lorem, ipsum dolor.
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-[150px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              {/* <!-- Passo 2 --> */}
              <div className="flex flex-col items-center text-center gap-0">
                <div className="w-[76px] h-[76px] rounded-[20px] bg-linear-to-b from-red-500 via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shrink-0">
                  <IdCardIcon />
                </div>
                <p class="text-yellow-500 text-xs font-semibold mb-1.5 tracking-wide">
                  Passo 2
                </p>
                <h3 class="text-white text-[15px] font-bold mb-1.5 leading-snug">
                  Lorem, ipsum dolor.
                </h3>
                <p class="text-gray-500 text-[13px] leading-relaxed max-w-[150px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              {/* <!-- Passo 3 --> */}
              <div className="flex flex-col items-center text-center gap-0">
                <div className="w-[76px] h-[76px] rounded-[20px] bg-linear-to-b from-red-500 via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shrink-0">
                  <IdCardIcon />
                </div>
                <p class="text-yellow-500 text-xs font-semibold mb-1.5 tracking-wide">
                  Passo 3
                </p>
                <h3 class="text-white text-[15px] font-bold mb-1.5 leading-snug">
                  Lorem, ipsum dolor.
                </h3>
                <p class="text-gray-500 text-[13px] leading-relaxed max-w-[150px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              {/* PASSO 4 */}

              <div class="flex flex-col items-center text-center gap-0">
                <div class="w-[76px] h-[76px] rounded-[20px] bg-linear-to-b from-red-500 via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shrink-0">
                  <IdCardIcon />
                </div>
                <p className="text-yellow-500 text-xs font-semibold mb-1.5 tracking-wide">
                  Passo 4
                </p>
                <h3 className="text-white text-[15px] font-bold mb-1.5 leading-snug">
                  Lorem, ipsum dolor.
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-[150px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-indigo-50 px-6 py-4 md:py-8">
          <h2 className="text-center text-lg md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            Porquê marcar o seu{' '}
            <span className="text-red-600">atendimento?</span>
          </h2>
          <p className="text-gray-500 max-w-3xl text-center text-sm m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            nihil. Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="beneficios-grid">
            <div className="beneficio">
              <div className="w-12 h-12 rounded-[14px] bg-linear-to-b from-red-500 from-20% via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shadow-[0_8px_28px_rgba(220,100,10,0.35)] shrink-0 text-white">
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
              <div className="w-12 h-12 rounded-[14px] bg-linear-to-b from-red-500 from-20% via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shadow-[0_8px_28px_rgba(220,100,10,0.35)] shrink-0 text-white">
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
              <div className="w-12 h-12 rounded-[14px] bg-linear-to-b from-red-500 from-20% via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shadow-[0_8px_28px_rgba(220,100,10,0.35)] shrink-0 text-white">
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
