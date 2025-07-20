import { useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams, Link } from "react-router";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchText, setsearchText] = useState(searchParams.get("text") || '');

    const handleKeyDown = (e) => {
        if (e.key === "Enter") navigate(`/search?text=${searchText}`);
    };

    const handleLogin = () => navigate('/Login');
    const handleClick = () => navigate(`/search?text=${searchText}`);

    return (
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-0 px-4 py-3 sm:py-4 justify-between items-center bg-blue-800 w-full">
            <Link to="/" className="text-white text-xl font-bold">Snap Cart</Link>
            <div className="relative flex items-center w-full sm:w-auto max-w-full sm:max-w-md">
                <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setsearchText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for Products"
                    className="w-full pl-10 pr-3 py-2 rounded-lg text-white bg-blue-700 placeholder-gray-300 outline-none border border-white"
                />
                <button
                    onClick={handleClick}
                    className="ml-2 px-4 py-2 rounded-lg bg-cyan-300 text-black hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                >
                    Search
                </button>
            </div>

            {/* Login button */}
            <button
                onClick={handleLogin}
                className="flex items-center gap-2 mt-2 sm:mt-0 px-4 py-2 text-white bg-cyan-300 rounded-md hover:bg-red-500 transition-colors cursor-pointer"
            >
                <CgProfile size={20} />
                Login
            </button>
        </nav>
    );
};

export default Navbar;
