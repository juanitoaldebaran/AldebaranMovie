import { createContext, useContext, useEffect, useState } from "react"


const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        localStorage.setItem("favouriteMovies", JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        const stored = localStorage.getItem("favouriteMovies");
        if (stored) setFavourites(JSON.parse(stored));
    }, []);

    const toggleFavourites = (movie) => {
        const exists = favourites.some((m) => m.id === movie.id);

        if (exists) {
            setFavourites((prev) => (prev.filter((m) => (m.id !== movie.id)))) 
        } else {
            setFavourites((prev) => ([...prev, movie]));
        }
    }

    return (
       <FavouritesContext.Provider value={{favourites, toggleFavourites}}>
        {children}
       </FavouritesContext.Provider>
    )
}