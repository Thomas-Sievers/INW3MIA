import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <header className="flex items-center bg-navbar text-white p-4 mb-4 justify-between">
            <img className="w-10 h-10" src="netflix.png" alt="" />
            <Navbar/>
            <img className="w-10 h-10" src="lupa.png" alt="" />
        </header>
    );
}

export default Header;