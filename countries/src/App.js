import React, { useEffect, useState } from 'react'
import Search from './components/Search'

import axios from 'axios'


function App() {
  const [country, setCountry] = useState([])
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountry(res.data)
      })
  }
  useEffect(hook, [])
  // console.log(country);
  return (
    <div>
      <Search country={country} />

    </div>
  );
}

export default App;


// in app 
// get data from api 
//parse json to js object
// set app state to obj


// search component 
//input state
//filter input state from glob obj 
// show