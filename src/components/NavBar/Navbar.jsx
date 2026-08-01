import { Link, NavLink } from 'react-router-dom';
import { Building, Headset, HomeIcon, InfoIcon, Menu, NotebookPen } from 'lucide-react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

// import { Landmark, Menu } from 'lucide-react';

// function Header() {
//   const dataLink = [
//     { href: '/', label: 'Home' },
//     { href: '/informacao', label: 'Informação' },
//     { href: '/agendamento', label: 'Agendamento' },
//     { href: '/sobre', label: 'Sobre' },
//     { href: '/contacto', label: 'Contacto' },
//   ];
//   return (
//     <>
//       <header className={`sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b transition-colors`}>
//         <div className="max-w-[1180px] mx-auto px-5 sm:px-7 flex items-center justify-between h-[76px]">
//           <a
//             href="#home"
//             className="flex items-center gap-3"
//             aria-label="SIGA·BI — página inicial"
//           >
//             <span className="w-10 h-10 rounded-[9px] bg-gradient-to-br from-ink to-ink-2 flex items-center justify-center text-gold-soft shrink-0">
//               <Landmark size={20} strokeWidth={2} />
//             </span>
//             <span className="flex flex-col leading-tight">
//               <strong className="font-display text-[19px] font-semibold text-ink">
//                 SIGA · BI
//               </strong>
//               <span className="text-[11.5px] text-muted">
//                 Agendamento do Bilhete de Identidade
//               </span>
//             </span>
//           </a>

//           <nav
//             className="hidden md:flex items-center gap-1"
//             aria-label="Navegação principal"
//           >
//             {dataLink.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className={`px-4 py-2 text-[14.5px] rounded-lg transition-colors}`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>

//           <div className="flex items-center gap-2.5">
//             <a
//               href="#agendamento"
//               className={`hidden md:inline-flex !px-4 !py-2.5 !text-[13.5px]`}
//             >
//               Agendar Atendimento
//             </a>
//             <button className="md:hidden flex items-center justify-center w-[42px] h-[42px] border border-line rounded-lg text-ink">
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* {menuOpen && (
//         <div className="md:hidden fixed inset-x-0 top-[76px] bottom-0 z-30 bg-bg px-5 pb-10 pt-6 flex flex-col gap-1 overflow-y-auto">
//           {NAV_LINKS.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className="py-4 px-1.5 text-lg font-semibold text-ink border-b border-line"
//             >
//               {link.label}
//             </a>
//           ))}
//           <a href="#agendamento" className="mt-4 w-full">
//             Agendar Atendimento <ArrowRight size={16} />
//           </a>
//         </div>
//       )} */}
//     </>
//   );
// }

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const dataLink = [
    { href: '/', icone: <HomeIcon />, label: 'Home' },
    { href: '/informacao', icone: <InfoIcon />, label: 'Informação' },
    { href: '/agendamento', icone: <NotebookPen />, label: 'Agendamento' },
    { href: '/sobre', icone: <Building />, label: 'Sobre' },
    { href: '/contacto', icone: <Headset />, label: 'Contacto' },
  ];

  return (
    <div className="flex items-center relative">
      {/* <Header/> */}
      <NavLink className="hidden md:flex items-center justify-center gap-4 text-sm text-gray-700 ">
        {dataLink.map((link) => (
          <Link to={link.href}>{link.label}</Link>
        ))}
      </NavLink>


      <p className='flex md:hidden text-sm text-slate-500'>Registo cívil de Angola</p>
      {/* <button
        type="button"
        onClick={() => setMenuToggle(!menuToggle)}
        className="flex md:hidden cursor-pointer text-amber-600"
      >
        <Menu className='font-bold' />
      </button> */}

    </div>
  );
}

export default Navbar;
