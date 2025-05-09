import { Link, NavLink } from "react-router";
import Logo from "./Logo";

const Navbar = () => {
    return (<nav id="navbar" className="w-full py-8 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-x-16">
            <NavLink to={"/"} className={({ isActive }) => `${(isActive ? "active" : "")} nav-link`}>
                Home
            </NavLink>
            {/* <Link to={"/#about"} className={`nav-link`}>
                About
            </Link> */}
            <NavLink to={"/projects"} className={({ isActive }) => `${(isActive ? "active" : "")} nav-link`}>
                Projects
            </NavLink>
            <Link to={"/#contact"} className={`nav-link`}>
                Contact
            </Link>
        </div>
    </nav>);
}

export default Navbar;