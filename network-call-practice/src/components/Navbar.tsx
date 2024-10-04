import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to={"/"}>
                    <h2 className="font-bold">Network Call Practice</h2>
                </Link>

                <div className="hidden md:flex space-x-8">
                    <Link to={"/"} className="text-gray-800 hover:text-blue-500 relative group">
                        Users
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to={"/register"} className="text-gray-800 hover:text-blue-500 relative group">
                        Register
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <FiMenu className="h-6 w-6"/>
                    </button>
                </div>
            </div>

            <div className={`absolute top-full left-0 w-full bg-white shadow-md trasnform transition-transform duration-300 ease-out ${isOpen ? 'block animate-slideIn' : 'hidden'}`}>
                <div className="flex flex-col space-y-4 p-4">
                    <Link to={"/"} className="text-gray-800 hover:text-blue-500 animate-fadeIn" onClick={toggleMenu}>
                        Users
                    </Link>
                    <Link to={"/register"} className="text-gray-800 hover:text-blue-500 animate-fadeIn" onClick={toggleMenu}>
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;