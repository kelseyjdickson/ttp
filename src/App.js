import React,{useState, useEffect} from 'react'
import {Home,} from '../src/components'
import  Navbar from './components/Navbar/Navbar'

const App =()=> {

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
  
  return (
    <div className="App">
      <Navbar pins={pins}/>
      <Home pins={pins}/>
    </div>
  );
}

export default App;
