import React, { useState,useEffect } from 'react'
import PinsFeed from '../components/PinFeed/PinsFeed'
const Home = ({ pins }) => {
    return(
        <>
           
            { pins && <PinsFeed pins={pins}/>}
            
        </>
        
    )
}

export default Home