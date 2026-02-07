const API_KEY = "YOUR_api";
const BASE_URL ="https://api.themoviedb.org/3";

export const getpopularmovies = async () =>{

    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`);
    const data = await response.json()
    
    const response2 = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=2`);
    const data2 = await response2.json()
    
    return [...data.results, ...data2.results]
};

export const searchmovies = async (query) =>{

    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};