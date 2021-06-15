import React, { useState, useEffect } from "react";

const PinsFeed = ({ pins }) => {
  console.log(pins);
  return (
    <div>
      <h1>PinsFeed</h1>
      {pins.map(pin => (
        <div key={pin.id}>
            <img src={pin.images['236x'].url}/>
            <p>{pin.title}</p>
            <p>{pin.pinner.full_name}| {pin.pinner.username}</p>
            
        </div>
      ))}
    </div>
  );
};

export default PinsFeed;
