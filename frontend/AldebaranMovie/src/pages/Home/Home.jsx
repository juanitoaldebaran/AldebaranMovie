import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSearchParams } from "react-router-dom";
import movieAPI from "../../api/movieApi";

export default function Home() {

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const query = searchParams.get("query");

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(false);

            const endpoint = query 
            ? `${movieAPI.BASE_URL}${movieAPI.SEARCH_URL}?api_key=${movieAPI.API_KEY}&query=${query}`
            : `${movieAPI.BASE_URL}${movieAPI.POPULAR_URL}?api_key=${movieAPI.API_KEY}`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setMovies(data.results || []);
            } catch (error) {
                setError(true);
                throw new Error("Failed to fetch movies");
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, [query]);

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="p-4 grid grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}