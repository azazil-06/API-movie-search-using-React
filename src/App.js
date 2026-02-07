import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Fav from './pages/Fav';
import { MovieProvider } from './contexts/MovieContext';


function App() {
  const movnum =0;
  return (
    <MovieProvider>
   <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/favourites" element={<Fav/>}></Route>

   </Routes>
   </MovieProvider>
  );
}

export default App;
