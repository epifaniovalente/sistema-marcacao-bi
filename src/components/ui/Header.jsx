import Logo from "../Logo/Logo";
import Navbar from "../NavBar/Navbar";

function Header() {
  return(
    <header className="bg-white/80 backdrop-blur-md border-b border-neutral-100 fixed top-0 z-10 w-full">
      <nav className="flex items-center justify-between gap-4 px-6 py-3.5 w-full max-w-7xl m-auto">
        <Logo/>
        <Navbar/>
      </nav>
    </header>
  )
}

export default Header