import React,{useState, useEffect} from 'react'
import {Home,} from '../src/components'
import  Navbar from './components/Navbar/Navbar'

import useInfiniteScroll from 'react-infinite-scroll-hook';

const App =()=> {

  const [pins, setPins] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTitle, setFilteredTitle]= useState(pins)

  let changeSearchTerm = theSearchedInput => {
    console.log(theSearchedInput, "mADE IT")
    setSearchQuery(theSearchedInput)
  }



  // useEffect(() => {
  //     fetch("http://localhost:8000/pins")
  //     .then(res => {
  //         return res.json();
  //     })
  //     .then(data => {
  //         setPins(data)
          
  //     })
  // }, []);

  return (
    <div className="App">
      <Navbar 
      pins={pins}  
      changeSearchTerm={changeSearchTerm}
      searchQuery={searchQuery}
      />
      <Home pins={pins} />
    </div>
  );
}

export default App;
