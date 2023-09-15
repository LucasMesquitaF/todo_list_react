import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div>
            <h2>Pesquisar:</h2>
            <input type="text" value={search} placeholder='Digite para pesquisar' onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default Search