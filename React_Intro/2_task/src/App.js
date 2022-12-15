import React, { useState } from 'react';
import Light from "./Light";
import "./styles.css";


export default function App() {

  const [isTurnedOn, setIsTurnedOn] = useState(true)

  const colors = ['red', 'yellow', 'blue', 'green']
  // const colorsMap = [...colors, ...colors]
  const colorsMap = [...colors.concat(...colors)]

  const handleTurn = () => {
    setIsTurnedOn(!isTurnedOn)
  }

  const buttonText = isTurnedOn ? 'Turn off' : 'Turn on'

  return (
    <main>
      <section className="lights">

        { colorsMap.map((color, index) => {
           return <Light key={color + index} color={isTurnedOn ? color : 'off'} />
        })}

      </section>
      <section className="buttons">
        <button onClick={()=> handleTurn()}>{buttonText}</button>
      </section>
    </main>
  );
}
