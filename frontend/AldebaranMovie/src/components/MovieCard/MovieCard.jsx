import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import movieAPI from "../../api/movieApi";
import { useFavourites } from "../../context/FavouritesContext";

export default function MovieCard({movie}) {

    const imageUrl = movie.poster_path 
    ? `${movieAPI.IMAGE_BASE_URL}${movie.poster_path}` 
    : "https://via.placeholder.com/500x750?text=No+Image";

    const {favourites, toggleFavourites} = useFavourites();

    const isFavourite = favourites.some((m) => m.id === movie.id);


    return (
        <div className="relative text-white w-50 bg-gray-900 mt-8 flex flex-col justify-center items-center p-4 cursor-pointer rounded-xl shadow-xl hover:scale-105 transition-transform duration-200">
            <div>
                <img 
                src={imageUrl} 
                alt={movie.title}
                className="object-cover w-full h-full"
                />
            </div>
            <div>   
            <button
            onClick={() => toggleFavourites(movie)}
            className="bg-gray-200 rounded-full absolute -top-2 right-0 p-4 cursor-pointer text-3xl">
                <FontAwesomeIcon 
                icon={faHeart} 
                className={isFavourite ? "text-red-500" : "text-black"}
                />
            </button>
            </div>
            <h1 className="font-semibold text-xl text-center mt-4">{movie.title}</h1>
            <div className="flex justify-between space-x-4 text-sm mt-2">
                    <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
                    <span>{Math.round(movie.vote_average * 10)}%</span>
            </div>
            <div>
                <button className="p-2 cursor-pointer mt-4 flex justify-center items-center gap-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                    <FontAwesomeIcon 
                    icon={faCircleArrowRight} 
                    />
                    Add to watchlist
                </button>
            </div>
        </div>
    )
}