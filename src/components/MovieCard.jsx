import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'

const MovieCard = ({movie}) => {
const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext()
const favourite = isFavourite(movie.id)
    function onClick1() {
    if (favourite) {
      removeFromFavourites(movie.id)
    } else {
      addToFavourites(movie)
    }
}
  return (
    <div>



      <div className="container">
        <div className="row">
            

                      <div class="card card-poster-wrapper">
                          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt="..."/>
                          <button type="button" className={`btn btn-outline-secondary heart-btn ${favourite ? "filled" : ""}`} onClick={onClick1}>♡</button>
                              <div class="card-body">
                                  <h5 class="card-title">{movie.title}</h5>
                                  <p class="card-text">{movie.release_date?.split("-")[0]}</p>
                                  
                                  

                              
                      </div>
            </div>

         </div>
           
    </div> 
    
</div>
  )
}

export default MovieCard
