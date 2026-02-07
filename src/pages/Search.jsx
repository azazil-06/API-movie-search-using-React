import React from 'react'

const Search = ({ searchQuery, setSearchQuery }) => {
    
  const handlesearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
  }

  return (
    <form onSubmit={handlesearch} className='search-form'>
      <input
        type='text'
        placeholder='Search for movies..'
        className='search-input'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button type='submit' className='search-button'>Search</button>
    </form>
  )
}

export default Search
