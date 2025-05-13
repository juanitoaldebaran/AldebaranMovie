import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowLeft, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Navbar() {

    const [isClick, setIsClick] = useState(false);
    const [searchMovieName, setSearchMovieName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (isOpen) {
            document.body.style.paddingTop = "320px";
            document.body.style.transition = "padding-top 0.3s ease";
        } else {
            document.body.style.paddingTop = "0";
        }


        return () => {
            document.body.style.paddingTop = "0";
            document.body.style.transition = "";
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
            e.preventDefault();
            if (searchMovieName.trim() === "") {
                alert("Please enter a movie!");
                return;
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



    const navItems = [
        {
            name: "Home",
            path: "/",
        }, 
        {
            name: "About",
            path: "/about",
        }, 
        {
            name: "Favourites",
            path: "/favourites",
        }, 
        {
            name: "Watchlist",
            path: "/watchlist",
        }, 
        {
            name: "Member",
            path: "/member",
        }, 
        {
            name: "Review",
            path: "/review",
        }, 
    ]

    return (
    <div className="relative">
        <nav className="bg-black h-20 text-white flex justify-between items-center fixed top-0 left-0 right-0 z-30">
            <div className="font-bold ml-4 z-40 relative">
                <Link className="text-3xl text-red-500" to={'/'}>AldebaranMovie</Link>
            </div>

            <div className="flex space-x-4 md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon 
                    className="cursor-pointer text-2xl"
                    icon={faBars}
                    />
                </button>
                <button onClick={() => setIsClick(true)}>
                    <FontAwesomeIcon 
                    className="cursor-pointer text-2xl text-white mr-6" 
                    icon={faMagnifyingGlass}
                    />
                </button>
            </div>

            <div className="hidden md:flex md:space-x-5">
                {navItems.map((items) => {
                    return (
                        <Link
                        key={items.path}
                        to={items.path}
                        className="relative group inline-block"
                        >
                        <span className="text-white">{items.name}</span>
                        <span className="absolute w-0 h-[2px] bg-red-500 left-0 -bottom-1 transition-all duration-400 group-hover:w-full"></span>
                        </Link>
                    )
                })}
                <button onClick={() => setIsClick(true)} className="hidden md:block text-2xl">
                <FontAwesomeIcon 
                className="cursor-pointer text-white mr-6" 
                icon={faMagnifyingGlass}
                />
            </button>
            </div> 
           
        </nav>

        <div className="h-20 w-full"></div>

        {isOpen && (
            <div className="fixed w-full top-20 left-0 md:hidden z-20">
                <div className="bg-black space-y-4 p-8 h-80 flex flex-col">
                {navItems.map((items) => {
                return (
                    <Link
                    key={items.path}
                    to={items.path}
                    className="relative group inline-block"
                    onClick={() => setIsOpen(false)}
                    >
                    <span className="text-white">{items.name}</span>
                    <span className="absolute w-0 h-[2px] bg-red-500 left-0 -bottom-1 transition-all duration-400 group-hover:w-20"></span>
                    </Link>
                )
            })}
            </div>
            <button className="absolute top-2 right-9 text-3xl cursor-pointer text-white" onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon
                icon={faClose}
                />
            </button>
            </div>
        )}

        {isClick && (
            <div className="fixed top-0 left-0 w-full z-50">
                <form onSubmit={handleSubmit} className="bg-black p-4 flex items-center justify-between w-full space-x-4">
                    <div className="flex space-x-8 justify-center items-center mt-4">
                        <FontAwesomeIcon 
                        className="cursor-pointer text-white text-2xl"
                        icon={faArrowLeft} 
                        onClick={handleArrowClick}
                        />
                        <button type="submit" disabled={isLoading}>
                            <FontAwesomeIcon 
                            className="cursor-pointer text-white text-2xl" 
                            icon={faMagnifyingGlass}
                        />
                        </button>
                        <input 
                            type="text"
                            placeholder="Search movies name..."
                            className="bg-gray-800 rounded-lg p-2 text-white w-80 md:w-120 lg:w-240 text-[1.2rem] focus:outline-none"
                            value={searchMovieName}
                            onChange={(e) => setSearchMovieName(e.target.value)}
                            disabled={isLoading}
                            autoFocus
                        />
                    </div>
                </form>
            </div>
        )}
        
        {isLoading && (
            <div className="fixed inset-0 z-50 flex items-center text-white justify-center">
                <LoadingSpinner />
            </div>
        )}
    </div>
    )
}