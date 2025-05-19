import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCalendarAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import movieAPI from "../../api/movieApi";
import SelectedMovies from "../../components/SelectedMovies/SelectedMovies";

export default function Review() { 
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState("");
    const [isDropdown, setIsDropdown] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        const fetchMovies = async () => {
            if (searchMovies.trim() === "") {
                setMovies([]);
                setIsLoading(false);
                return;
            }

            const endpoints = searchMovies 
            ? `${movieAPI.BASE_URL}${movieAPI.SEARCH_URL}?api_key=${movieAPI.API_KEY}&query=${searchMovies}`
            : `${movieAPI.BASE_URL}${movieAPI.POPULAR_URL}?api_key=${movieAPI.API_KEY}`

            try {
                const response = await fetch(endpoints);
                const data = await response.json();
                console.log(data);
                setMovies(data.results || []);
                setIsDropdown(true);
            } catch (error) {
                setIsError(true);
                console.error("Failed to search for movies", error);
            } finally {
                setIsLoading(false);
            }
        }
 //test
        const debounceTimer = setTimeout(() => {
            fetchMovies();
        }, 300);

        return () => clearTimeout(debounceTimer);

    }, [searchMovies]);

    const handleSubmitResult = (e) => {
        e.preventDefault();
    }

    const handleSelectedMovies = (movieClick) => {
        setSelectedMovies((prevMov) => [...prevMov, movieClick]);
        console.log(movieClick);
        setSearchMovies("");
        setIsDropdown(false);
    }

    const handleRemoveMovie = (removeMovie) => {
        setSelectedMovies((prevMov) => (prevMov.filter((movies) => movies.id !== removeMovie.id)));
    }

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
            <Navbar />
            <h1 className="ml-4 text-white text-3xl font-bold text-center mt-8 pb-2 border-b border-red-500 inline-block">
                    Review Movies
            </h1>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-white text-2xl mt-5">
                    Start review movies here
                </p>
                <form onSubmit={handleSubmitResult} className="flex gap-2 relative w-full max-w-2xl">

                    <div className="relative flex-1">
                        <input 
                            onChange={(e) => {
                                setSearchMovies(e.target.value)
                                if (e.target.value === "") {
                                    setIsDropdown(false)
                                }
                            }}
                            value={searchMovies}
                            type="text" 
                            placeholder="Search movies"
                            className="text-gray-900 w-160 h-12 rounded bg-white p-2"
                            onFocus={() => movies.length > 0 && setIsDropdown(true)}
                            />
                        <button
                            type="submit"
                            className="absolute bg-blue-600 p-3 -right-5 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 rounded"
                                >
                                <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                size="lg"
                                />
                        </button>
                    </div>
                    
                    {isDropdown && (
                        <div className="text-white absolute top-16 left-0 w-full max-h-96 overflow-y-auto bg-white z-10 rounded">
                            {isLoading ? (
                                <div className="p-6 flex flex-col items-center justify-center gap-2">
                                    <div
                                    className="animate-spin border-b-2 border-red-500 rounded-full h-10 w-10"
                                    >
                                    </div>
                                    <p className="text-center text-black">Search movies...</p>
                                </div>
                            ): isError ? (
                                <div className="p-4 text-center text-red-600 bg-red-50 rounded-lg m-2">Error...</div>
                            ) : movies.length === 0 ? (
                                <div className="p-4 text-center text-gray-100">No movies found</div>
                            ) : (
                                <ul className="divide-y divide-gray-100">
                                    {movies.map((movie) => (
                                        <li
                                        key={movie.id}
                                        className="p-4 hover:bg-gray-200 cursor-pointer transition-colors duration-100"
                                        onClick={() => handleSelectedMovies(movie)}
                                        >
                                            <div className="flex-1 min-w-0">
                                                {movie.poster_path ? (
                                                        <img 
                                                        className="w-16 h-24 rounded object-cover"
                                                        src={`${movieAPI.IMAGE_BASE_URL}${movie.poster_path}`}
                                                        alt={movie.title}
                                                        />

                                                ) : (
                                                    <div className="w-16 h-24 text-white">
                                                        No Image
                                                    </div>
                                                )}
                                                <div className="flex justify-between">
                                                    <h2 className="text-black text-2lg font-semibold mt-2">{movie.title}</h2>
                                                    <div className="bg-white rounded flex items-center gap-2 p-1">
                                                        <FontAwesomeIcon
                                                        className="text-yellow-600"
                                                        icon={faStar}
                                                        />
                                                        <p className="text-black">
                                                            {(movie.vote_average).toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex p-1 text-white mt-2 items-center justify-center gap-2 bg-gray-400 w-20 rounded text-black ">
                                                    <FontAwesomeIcon 
                                                        icon={faCalendarAlt}
                                                        size="sm"
                                                        />
                                                    <p className="text-white text-sm">{movie.release_date?.substring(0, 4)}</p>
                                                </div>  
                                                <div>
                                                    <p className="text-gray-600 mt-4 text-justify">{movie?.overview || "No movies overview"}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </form>
                
                {selectedMovies.length > 0 && (
                    <SelectedMovies
                        movies={selectedMovies}
                        removeMovie={handleRemoveMovie}
                    />
                )}

            </div>
        </div>
    )
}