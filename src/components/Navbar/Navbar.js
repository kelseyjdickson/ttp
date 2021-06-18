import React from 'react'
import  Search  from '../Search/Search'

//assets
import pinterestLogo from '../../assets/p.png';
import bell from '../../assets/bell.png'
import chat from '../../assets/chat.png'
import profilePic from '../../assets/kel.png'
import './_navbar.scss'


const Navbar = ({ pins,  changeSearchTerm, searchQuery}) => {
  
    return(
        <>
        <div className="nav">
        <img className="logo"src={pinterestLogo} alt="pinterest"/>
        <h2 className="nav__home">Home</h2>
        <Search 
        pins={pins}  
        changeSearchTerm={changeSearchTerm}
        searchQuery={searchQuery}
         />
        <img className="nav__bell"src={bell} alt="notifications bell"/>
        <img className="nav__chat" src={chat} alt="messages"/>
        <img className="nav__profile"src={profilePic}/>
        </div>
        </>
    )
}

export default Navbar