import { BadgeQuestionMark, IdCard, IdCardIcon } from 'lucide-react';


const passos = [
    {
        passo: 'Passso 1',
        icone: <IdCardIcon />,
        nome: 'Lorem, ipsum dolor.',
        explicacao: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        passo: 'Passso 2',
        icone: <IdCardIcon />,
        nome: 'Lorem, ipsum dolor.',
        explicacao: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        passo: 'Passso 3',
        icone: <IdCardIcon />,
        nome: 'Lorem, ipsum dolor.',
        explicacao: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        passo: 'Passso 4',
        icone: <IdCardIcon />,
        nome: 'Lorem, ipsum dolor.',
        explicacao: 'Lorem ipsum dolor sit amet consectetur.'
    }
]

function Funcionamento() {
    return (
        <section className="relative bg-black py-20 px-6 overflow-hidden">
            <div className="relative max-w-4xl mx-auto">
                <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-yellow-600 mb-3">
                    Processo simples
                </p>
                <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                    Como <span className="text-yellow-600">Funciona</span>
                </h2>
                <p className="text-center text-gray-500 text-sm md:text-base max-w-sm mx-auto mb-14 leading-relaxed">
                    4 passos simples para agendar o seu atendimento
                </p>

                {/* PASSOS */}

                <article class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">

                    {passos.map((passo) => (
                        <div class="flex flex-col items-center text-center gap-0">
                            <div className="w-[76px] h-[76px] text-white rounded-[20px] bg-linear-to-b from-red-500 via-yellow-600 to-slate-900 flex items-center justify-center mb-5 shrink-0">
                                {passo.icone}
                            </div>
                            <p className="text-yellow-500 text-xs font-semibold mb-1.5 tracking-wide">
                                {passo.passo}
                            </p>
                            <h3 className="text-white text-[15px] font-bold mb-1.5 leading-snug">
                                {passo.nome}
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed max-w-[150px]">
                                {passo.explicacao}
                            </p>
                        </div>
                    ))}

                </article>
            </div>
        </section>
    )
}


export default Funcionamento