import React, { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import List from './components/List'



const App = () => {

  const [tiles, setTiles] = useState([])

  // const changeNumberTiles = (event) => {

  //   event.target.textContent === '+' ?
  //   setTiles(current => [...current, generateRandomcolor()]) :
  //   setTiles(current => current.slice(0, -1))

  // }

  return <div className='app'>
    <Button tiles={tiles} setTiles={setTiles} value='+' />
    <Counter number={tiles.length}/>
    <Button tiles={tiles} setTiles={setTiles} value='-' />

    <List tiles={tiles} />
  </div>

}


export default App;
