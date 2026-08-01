import { Book, BookImageIcon, Building, Headset, HomeIcon, InfoIcon, NotebookPen } from "lucide-react";
import { motion } from 'framer-motion';
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom"

const dataLink = [
    { href: '/', icone: <HomeIcon />, label: 'Home' },
    { href: '/informacao', icone: <InfoIcon />, label: 'Informação' },
    { href: '/agendamento', icone: <NotebookPen />, label: 'Agendamento' },
    { href: '/sobre', icone: <Building />, label: 'Sobre' },
    { href: '/contacto', icone: <Headset />, label: 'Contacto' },
];

function Sidebar({onClose}) {
    return (
        <section className='w-full h-full flex md:hidden overflow-hidden'>

            <aside className="bg-[#f8fafc] absolute w-full ease-in-out duration-300 bottom-0 left-0 right-0 fixed z-20 shadow-sm">


                <section className="flex flex-col gap-4 px-2">

                    {/* <h4 className="text-center text-xs uppercase text-gray-500">Para o cidadão</h4> */}
                    <NavLink className="flex justify-between gap-8 w-full">
                        {dataLink.map((link) => (
                            <Link to={link.href} onClick={onClose} className="flex flex-col items-center gap-2 text-xs font-bold active:scale-95 hover:bg-amber-100 p-2 rounded-lg transition-all ease-in-out w-full shrink">
                                <span className="text-amber-500">{link.icone}</span> {link.label}
                            </Link>
                        ))}
                    </NavLink>
                </section>
            </aside>
        </section>
    )
}
export default Sidebar