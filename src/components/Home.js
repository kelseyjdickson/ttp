import React, { useState,useEffect } from 'react'
import PinsFeed from './PinsFeed'
const Home = () => {
    const [pins, setPins] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/pins")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setPins(data)
        })
    }, []);
   


    return(
        <>
            <h1>Home</h1>
            { pins && <PinsFeed pins={pins}/>}
        </>
        
    )
}

export default Home