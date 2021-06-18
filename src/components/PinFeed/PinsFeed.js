import React, { useState, useEffect } from "react";
//packages
import useInfiniteScroll from 'react-infinite-scroll-hook';

//assets
import './_pinsFeed.scss'
import heart from '../../assets/heart.png'


const PinsFeed = ({ pins }) => {
  // const { loading, items, hasNextPage, error, loadMore } = useLoadItems();
  // const [sentryRef] = useInfiniteScroll({
  //   loading,
  //   hasNextPage,
  //   onLoadMore: loadMore,
  //   // When there is an error, we stop infinite loading.
  //   // It can be reactivated by setting "error" state as undefined.
  //   disabled: !!error,
  //   // `rootMargin` is passed to `IntersectionObserver`.
  //   // We can use it to trigger 'onLoadMore' when the sentry comes near to become
  //   // visible, instead of becoming fully visible on the screen.
  //   rootMargin: '0px 0px 400px 0px',
  // });
  return (
      
    <div className="feed">
      
      
      {pins.map(pin => (
        <div key={pin.id}>
            <img className="feed__pin-image"src={pin.images['236x'].url}/>
            <p className="feed__title">{pin.title}</p>
            <p className="feed__name">{pin.pinner.full_name} | {pin.pinner.username}</p>
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
