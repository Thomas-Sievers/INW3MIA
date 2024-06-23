import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="flex gap-3">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="Filmes">Filmes</NavLink></li>
                <li><NavLink to="Sobre">Sobre</NavLink></li>
                <li><NavLink to="Contato">Contato</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;