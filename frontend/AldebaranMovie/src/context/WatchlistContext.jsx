import { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({children}) => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("watchlistMovies");
        if (saved) {
            setWatchlist(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
       localStorage.setItem("watchlistMovies", JSON.stringify(watchlist));
    }, [watchlist]);
    
    const toggleWatchlist = (movie) => {
        const isAlreadyWatchlist = watchlist.some((wl) => (wl.id === movie.id));

        if (isAlreadyWatchlist) {
            setWatchlist((prev) => (prev.filter((wl) => (wl.id !== movie.id))));
        } else {
            setWatchlist((prev) => ([...prev, movie]));
        }
    }

    return (
        <WatchlistContext.Provider value={{watchlist, toggleWatchlist}}>
            {children}
        </WatchlistContext.Provider>
    )
}