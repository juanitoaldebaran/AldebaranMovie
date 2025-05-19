import { Link } from "react-router-dom"
import movieAPI from "../../api/movieApi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"

export default function SelectedMovies({movies, removeMovie}) {


    return (
        <div className="w-full max-w-4xl mx-auto">
           <div className="rounded-lg overflow-hidden shadow-lg">
                <h1 className="text-white text-xl text-left border-b-2 border-gray-600 p-4 bg-gray-900">Selected Movies: {movies.length}</h1>
                
            <div className="bg-gray-200 max-h-[500px] overflow-y-auto">
                {movies.length === 0 ? (
                    <div className="p-6 text-center text-gray-400">
                        No Movies added
                    </div>
                ) : (
                    <ul>
                        {movies.map((selectedMovies) => (
                            <li
                            key={selectedMovies.id}
                            className="flex items-center justify-between p-4 border-b-2"
                            >
                                {selectedMovies.poster_path ? (
                                    <div className="w-16 h-24 object-cover rounded">
                                        <img 
                                        src={`${movieAPI.IMAGE_BASE_URL}${selectedMovies.poster_path}`}
                                        alt={selectedMovies.title} 
                                        />
                                    </div>
                                ) : (
                                    <div className="text-white">
                                        <p>No Image</p>
                                    </div>
                                )}
                                <div className="text-black font-bold text-lg">
                                    {selectedMovies.title}
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="bg-green-600 cursor-pointer rounded text-white p-4 hover:bg-green-800 duration-100" to={'/rate'}>
                                        Rate movies
                                    </button>
                                    <button
                                        onClick={() => removeMovie(selectedMovies)}
                                        className="bg-red-600 cursor-pointer text-white p-4 hover:bg-red-800 rounded duration-100">
                                            Remove movies
                                    </button>
                                    <button
                                    className="bg-blue-600 cursor-pointer rounded text-white p-4 hover:bg-blue-700 duration-100"
                                    >
                                        See your review
                                    </button>
                                </div> 
                            </li>
                        ))}
                    </ul>
                )}
            </div>
           </div>
        </div>
    )
}