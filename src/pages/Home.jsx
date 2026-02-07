import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import Search from './Search'
import Navbar from '../components/Navbar';
import { searchmovies,getpopularmovies } from '../services/api';

const Home = () => {

const [searchQuery, setSearchQuery] = useState("");

const [mov, setMovies] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const loadpopmov = async () => {
        try {
            const popmov= await getpopularmovies();
            setMovies(popmov)
        } catch(err) {
            console.log(err)
            setError("Failed to load movies")}
        finally {setLoading(false)}
    }
loadpopmov()

}, [])


  return (
    <div className='home'>
        
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} type={0} loading={loading} setLoading={setLoading} setMovies={setMovies} setError={setError}/>
        
       { error && <div className='error-message'>{error}</div>  }

        {loading ? (<div className='loading'>Loading...</div>)
        :
       ( <div className='movie-grid'>
            {mov.map((mov) => 
               <MovieCard movie={mov} key={mov.id} />
            )}
        </div>)}
      
    </div>
  )
}

export default Home
