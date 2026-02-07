import React from 'react'
import { href, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { searchmovies } from '../services/api'

const Navbar = ({searchQuery, setSearchQuery, type, setLoading, loading, setMovies, setError}) => {
const [theme, setTheme] = useState("dark");    

     const handlesearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchmovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    }
    catch(err)
    {}
    finally{setLoading(false)}
  }

  const navigate = useNavigate();
    
    const handlefavclick = () =>{
        navigate ('/favourites');
        
    };
    const handlebackclick = () =>{
        navigate ('/');
        
    };


    const handleToggle = (e) => {
  if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
};
    
    return (
        <div>
           
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    
                            
                       <nav className={`navbar border-bottom ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} data-bs-theme={theme}>


                            <div class="container-fluid">
                                <a class="navbar-brand">goat ARJUN</a>
                                <form class="d-flex" role="search">
                                
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                                         value={searchQuery}
                                         onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button onClick={handlesearch} class="btn btn-outline-success me-2" type="submit"  >Search</button>
                                    


                                    {type == 1 ?
                                    
                                    (<button onClick={handlebackclick} class="btn btn-outline-light me-3" >🠀</button>)
                                    :
                                    (<button onClick={handlefavclick} class="btn btn-outline-light me-3" >♡</button>)};


                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleToggle} style={{fontSize: '1.25rem'}}/>
                                   
                                </div>
                                </form>

                            </div>
                        </nav>
                    











                </div>
            </div>
        </div>
        
    )
}

export default Navbar
