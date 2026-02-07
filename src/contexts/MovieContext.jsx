import { createContext, useState,useContext,useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext =() => useContext(MovieContext)
export const MovieProvider =({children}) => {
    const [favourites,setFavourites]=useState(() => {
        const stored = localStorage.getItem("favourites")
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem('favourites',JSON.stringify(favourites))
    } , [favourites])
    

    const addToFavourites = (movie) =>{
        if (!favourites.some(fav => fav.id === movie.id)) {
            setFavourites(prev => [...prev, movie])
        }
    }   
    
    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie =>movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }
    
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}