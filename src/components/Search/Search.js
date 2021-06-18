import React,{ useState } from 'react'

//assets
import './_search.scss'
import SearchIcon from '../../assets/Search'


const Search = ( { pins, changeSearchTerm, searchQuery} ) => {
   
    const onChange = e =>{
        changeSearchTerm(e.target.value)
    }
    
    return(
    <>
        <form className="search">
           
            <input 
            type="text"
            className="search__input"
            placeholder={"Search"}
             value={searchQuery}
           onChange={onChange}
            />
     </form>
    </>
       
    )
}

export default Search