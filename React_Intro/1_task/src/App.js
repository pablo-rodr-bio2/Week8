import React, { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import List from './components/List'



const App = () => {

  const [tiles, setTiles] = useState([])

  const generateRandomcolor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  const changeNumberTiles = (event) => {

    event.target.textContent === '+' ?
    setTiles(current => [...current, generateRandomcolor()]) :
    setTiles(current => current.slice(0, -1))

  }

  return <div className='app'>
    <Button tiles={tiles} changeNumberTiles={changeNumberTiles} value='+' />
    <Counter number={tiles.length}/>
    <Button tiles={tiles} changeNumberTiles={changeNumberTiles} value='-' />

    <List tiles={tiles} />
  </div>

}


export default App;
