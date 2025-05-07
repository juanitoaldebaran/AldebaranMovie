import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import movieAPI from "../../api/movieApi";

export default function MovieCard({movie}) {

    const imageUrl = movie.poster_path 
    ? `${movieAPI.IMAGE_BASE_URL}${movie.poster_path}` 
    : "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <div className="relative w-60 bg-white flex flex-col justify-center items-center p-4 cursor-pointer rounded-2xl shadow-xl hover:scale-105 transition-transform duration-200">
            <div>
                <img 
                src={imageUrl} 
                alt={movie.title}
                className="object-cover w-full"
                />
            </div>
            <h1 className="font-semibold text-2xl text-center mt-4">{movie.title}</h1>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
                    <span>{Math.round(movie.vote_average * 10)}%</span>
                </div>
            <button className="border-2 rounded-lg p-1 space-x-2 mt-2 cursor-pointer">
                <FontAwesomeIcon icon={faPlus} />
                Add to watchlist
            </button>
        </div>
    )
}