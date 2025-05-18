import MovieCard from "../../components/MovieCard/MovieCard";
import Navbar from "../../components/Navbar/Navbar";
import { useFavourites } from "../../context/FavouritesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function Favourites() {

    const { favourites } = useFavourites();

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
            <Navbar />
            <h1 className="ml-4 text-white text-3xl font-bold text-center mt-8 pb-2 border-b border-red-500  inline-block">Your Favourites Movies</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {favourites.length > 0 ? (
                        favourites.map((fav) => (
                            <MovieCard key={fav.id} movie={fav}/>
                        ))) : (
                        <div className="w-full flex flex-col gap-5 justify-center items-center col-span-full">
                            <p className="text-white text-xl mt-8">No favourites movie added</p>
                            <Link to={'/home'} className="px-2 py-2 text-lg text-white bg-red-500 rounded hover:bg-red-800 transition duration-200">
                                <FontAwesomeIcon
                                className="mr-2"
                                 icon={faCircleArrowRight} />
                                Add Movies
                            </Link>
                        </div>                
                        )}
                </div>
        </div>
    )
} 