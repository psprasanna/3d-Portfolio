import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">PS</p>
        </NavLink>

        <nav className="flext text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive })=> `${isActive ? 'text-blue-500' : 'text-black'} mr-2`}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive })=>`${isActive ? 'text-blue-500' : 'text-black'} mr-2` }>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive})=> isActive ? 'text-blue-500' : 'text-black' }>
                Contact
            </NavLink>

        </nav>
    </header>
  )
}

export default Navbar