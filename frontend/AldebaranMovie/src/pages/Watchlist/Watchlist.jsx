import MovieCard from "../../components/MovieCard/MovieCard";
import Navbar from "../../components/Navbar/Navbar";
import { useWatchlist } from "../../context/WatchlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Watchlist() {
    const { watchlist } = useWatchlist(); 

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
            <Navbar />
            <h1 className="ml-4 text-white text-3xl font-bold text-center mt-8 pb-2 border-b border-red-500 inline-block">Your Watchlist Movies</h1>
            <div>
                {watchlist.length > 0 ? (
                    watchlist.map((watL) => (
                        <MovieCard key={watL.id} movie={watL} />
                    ))) : (
                    <div className="w-full flex flex-col justify-center items-center col-span-full gap-5">
                        <p className="text-white text-xl mt-8">No watchlist movie added</p>
                            <Link to={'/'} className="px-2 py-2 text-lg text-white bg-red-500 rounded hover:bg-red-800 transition duration-200">
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