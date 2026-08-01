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
    return createPortal(
        <section className='w-full h-full backdrop-blur-xs z-10 inset-0 fixed'>

            <aside className="bg-[#f8fafc] absolute h-full w-64 ease-in-out duration-300  top-0 bottom-0 left-0 fixed z-20 shadow-sm">


                <section className="flex flex-col gap-4 mt-16 p-2">

                    <h4 className="text-center text-xs uppercase text-gray-500">Para o cidadão</h4>
                    <NavLink className="flex flex-col gap-8">
                        {dataLink.map((link) => (
                            <Link to={link.href} onClick={onClose} className="flex items-center gap-2 text-sm font-bold active:scale-95 hover:bg-amber-100 p-2 rounded-lg transition-all ease-in-out">
                                <span className="text-amber-500">{link.icone}</span> {link.label}
                            </Link>
                        ))}
                    </NavLink>
                </section>
            </aside>
        </section>, document.body
    )
}
export default Sidebar