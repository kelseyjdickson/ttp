import React, { useState, useEffect } from "react";

//assets
import './_pinsFeed.scss'
import heart from '../../assets/heart.png'
const PinsFeed = ({ pins }) => {
  console.log(pins);
  return (
    <div className="feed">
      
      {pins.map(pin => (
        <div key={pin.id}>
            <img className="feed__pin-image"src={pin.images['236x'].url}/>
            <p className="feed__title">{pin.title}</p>
            <p className="feed__name">{pin.pinner.full_name} | {pin.pinner.username}</p>
            {/* <img src={pin.pinner.image_large_url}/> */}
            <div className="feed__likes">
              <img className="feed__heart" src={heart} alt="likes"/>
              <p>{pin.like_count}</p>
              </div>
        </div>
      ))}
    </div>
  );
};

export default PinsFeed;
