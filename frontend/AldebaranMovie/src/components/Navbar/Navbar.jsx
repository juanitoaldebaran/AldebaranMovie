import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Navbar() {

    const [isClick, setIsClick] = useState(false);
    const [searchMovieName, setSearchMovieName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();
        if (searchMovieName.trim() === "") {
            alert("Please enter a movie!");
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate(`/?query=${searchMovieName}`);
        }, 1500);

   }

    const handleArrowClick = () => {
        setIsClick(false);
        navigate('/');
    }


    const handleSearchClick = () => {
        setIsClick(true)
    }


    return (
      <nav className="bg-black h-20 text-white relative flex justify-between items-center">
        <div className="font-bold ml-4">
            <Link className="text-3xl text-red-500" to={'/'}>AldebaranMovie</Link>
        </div>
        <div className="space-x-5">
            {["/", "/about", "/favourites", "/watchlist", "/services", "/review"].map((path, i) => {
                const names = ["Home", "About", "Favourites", "Watchlist", "Services", "Review"];

                return (
                    <Link
                    key={path}
                    to={path}
                    className="relative group inline-block"
                    >
                    <span className="">{names[i]}</span>
                    <span className="absolute w-0 h-[2px] bg-red-500 left-0 -bottom-1 transition-all duration-400 group-hover:w-full"></span>
                    </Link>
                )
            })}
            <button onClick={handleSearchClick}>
                <FontAwesomeIcon 
                 className="cursor-pointer text-white mr-6" icon={faMagnifyingGlass}/>
        </button>
        </div> 
        {isClick && (
            <form onSubmit={handleSubmit} className="absolute top-0 left-0 bg-black p-4 flex items-center justify-between w-full space-x-4 ">
                <div className="flex space-x-8 justify-center items-center mt-4">
                    <FontAwesomeIcon 
                    className="cursor-pointer"
                    icon={faArrowLeft} 
                    onClick={handleArrowClick}
                    />
                    <button type="submit" disabled={isLoading}>
                        <FontAwesomeIcon 
                        className="cursor-pointer text-white" 
                        icon={faMagnifyingGlass}
                        />
                    </button>
                    <input 
                    type="text"
                    placeholder="Search movies name..."
                    className="bg-gray-800 rounded-lg p-2 text-white w-320 text-[1.2rem] focus:outline-none "
                    value={searchMovieName}
                    onChange={(e) => setSearchMovieName(e.target.value)}
                    disabled={isLoading}
                    />
                </div>
            </form>
        )}
        {isLoading && (<LoadingSpinner />)}
      </nav>
    )
}
   