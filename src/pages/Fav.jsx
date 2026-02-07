import React from 'react'
import Navbar from '../components/Navbar'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'

const Fav = () => {
  const { favourites } = useMovieContext()
  
  return (
    <div className='home'>
      <Navbar type={1}/>
      <div className='movie-grid'>
        {favourites.length > 0 ? (
          favourites.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <p style={{textAlign: 'center', gridColumn: '1/-1', padding: '20px'}}>No favorites yet</p>
        )}
      </div>
    </div>
  )
}

export default Fav
