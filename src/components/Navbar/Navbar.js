import React from 'react'
import  Search  from '../Search/Search'

//assets
import pinterestLogo from '../../assets/p.png';
import bell from '../../assets/bell.png'
import chat from '../../assets/chat.png'
import './_navbar.scss'


const Navbar = ({ pins }) => {
  
    return(
        <>
        <div className="nav">
        <img className="logo"src={pinterestLogo} alt="pinterest"/>
        <h2 className="nav__home">Home</h2>
        <Search />
        <img className="nav__bell"src={bell} alt="notifications bell"/>
        <img className="nav__chat" src={chat} alt="messages"/>
        </div>
        </>
    )
}

export default Navbar