const movieAPI = {
    API_KEY: "3bf219cdc59af8ce1a681b3cc7431367",
    BASE_URL: "https://api.themoviedb.org/3",
    SEARCH_URL: "/search/movie",
    POPULAR_URL: "/movie/popular",
    IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500"
}

export default movieAPI;

// const endpoint = query 
// ? `${movieAPI.BASE_URL}${movieAPI.SEARCH_URL}?api_key=${movieAPI.API_KEY}&query=${query}`
// : `${movieAPI.BASE_URL}${movieAPI.POPULAR_URL}?api_key=${movieAPI.API_KEY}`;