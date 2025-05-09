import MovieCard from "../../components/MovieCard/MovieCard";
import Navbar from "../../components/Navbar/Navbar";
import { useFavourites } from "../../context/FavouritesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function Favourites() {

    const { favourites } = useFavourites();

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
                <h1 className="text-white text-center font-bold text-xl mt-8">Your Favourites Movies</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {favourites.length > 0 ? (
                        favourites.map((fav) => (
                            <MovieCard key={fav.id} movie={fav}/>
                        ))) : 
                        (
                        <div className="w-full flex flex-col gap-5 justify-center items-center col-span-full">
                            <p className="text-white mt-8">No favourites movie added</p>
                            <Link to={'/'} className="bg-red-500 rounded-lg text-white p-4">
                                <FontAwesomeIcon icon={faCircleArrowRight} />
                                Search Movies
                            </Link>
                        </div>                
                        )}
                </div>
        </div>
    )
} 