import React, { useState } from 'react';
import Button from './components/Button';
import List from './components/List'



const App = () => {

  const [tiles, setTiles] = useState([])

  return <div className='app'>
    <Button totalTiles={tiles.length} setTiles={setTiles} value='+' />
    <span>{tiles.length}</span>
    <Button totalTiles={tiles.length} setTiles={setTiles} value='-' />

    <List tiles={tiles} />
  </div>

}


export default App;
