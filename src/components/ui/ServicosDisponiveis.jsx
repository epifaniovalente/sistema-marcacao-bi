import { BadgeQuestionMark, IdCard, IdCardIcon } from 'lucide-react';

const servicos = [
    {
        id: 1,
        icone: <IdCard className="w-6 h-6 text-amber-600" />,
        titulo: 'Renovação',
        explicao: 'Renove o seu Bilhete de Identidade quando este estiver expirado ou prestes a expirar.',
        requisitos: [
            {
                icone: <IdCard className="w-4 h-4 text-amber-600 shrink-0" />,
                texto: 'BI expirado ou a expirar'
            },
            {
                icone: <IdCard className="w-4 h-4 text-amber-600 shrink-0" />,
                texto: 'Actualização de dados pessoais'
            },
            {
                icone: <IdCard className="w-4 h-4 text-amber-600 shrink-0" />,
                texto: 'Nova fotografia'
            }
        ]
    },
    {
        id: 2,
        icone: <IdCard className="w-6 h-6 text-amber-600" />,
        titulo: 'Segunda Via',
        explicao: 'Solicite uma segunda via do seu BI em caso de perda, roubo ou deterioração.',
        requisitos: [

            {
                icone: <IdCard className="w-4 h-4 text-amber-600 shrink-0" />,
                texto: 'Perda ou roubo do BI'
            },
            {
                icone: <IdCard className="w-4 h-4 text-amber-600 shrink-0" />,
                texto: 'BI danificado ou ilegível'
            },
            {
                icone: <IdCard className="w-4 h-4 text-amber-600 shrink-0" />,
                texto: 'Emissão de duplicado'
            }
        ]
    }
]

function ServicosDisponiveis() {
    return (
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
                    {servicos.map((servico) => (

                        <article className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col">
                            {/* ICONE */}
                            <div class="w-13 h-13 bg-indigo-50 rounded-[14px] flex items-center justify-center mb-5">
                                {servico.icone}
                            </div>
                            <h3 className="text-lg font-bold text-amber-600 mb-2 text-left">
                                {servico.titulo}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-5 text-left">
                                {servico.explicao}
                            </p>

                            <ul className="space-y-2 mb-7">
                                {servico.requisitos.map((requisito) => (
                                    <li key={requisito.texto} class="flex items-center gap-2 text-[13.5px] text-gray-600">
                                        {requisito.icone}
                                        {requisito.texto}
                                    </li>
                                ))}

                            </ul>
                        </article>
                    ))}


                </section>
            </div>
        </section>
    )
}

export default ServicosDisponiveis