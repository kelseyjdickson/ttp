import React from 'react'

//assets
import './_search.scss'
import SearchIcon from '../../assets/Search'


const Search = () => {
    return(
    <>
        <form className="search">
           <SearchIcon className="search__icon"/>
            <input 
            type="text"
            className="search__input"
            placeholder={"Search"}
            />
     </form>
    </>
       
    )
}

export default Search