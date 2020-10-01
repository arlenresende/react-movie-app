import React from 'react'

function Search({handleInput, search}) {
    return (
       <section className="searchbox-wrap">
           <input 
           type="text" 
           placeholder="Burcar Filmes " 
           className="searchbox" 
           onChange={handleInput}
           onKeyPress={search}
           />
       </section>
    )
}

export default Search
