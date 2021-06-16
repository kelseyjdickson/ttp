import React, { useState, useEffect } from "react";

//assets
import './_pinsFeed.scss'
const PinsFeed = ({ pins }) => {
  console.log(pins);
  return (
    <div className="feed">
      
      {pins.map(pin => (
        <div key={pin.id}>
            <img className="feed__pin-image"src={pin.images['236x'].url}/>
            <p>{pin.title}</p>
            <p>{pin.pinner.full_name}| {pin.pinner.username}</p>
            
        </div>
      ))}
    </div>
  );
};

export default PinsFeed;
