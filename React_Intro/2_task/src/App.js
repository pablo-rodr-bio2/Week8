import React, { useState } from 'react';
import Light from "./Light";
import "./styles.css";

const colors = ['red', 'yellow', 'blue', 'green']

const colorsMap = [...colors, ...colors]

export default function App() {

  const [isTurnedOn, setIsTurnedOn] = useState(true)

  const handleTurn = () => {
    setIsTurnedOn((value) => !value)
  }
 

  return (
    <main>
      <section className="lights">

        {
          colorsMap.map((color, index) =>
                      <Light key={index} color={isTurnedOn ? color : 'off'} />)
        }

      </section>

      <section className="buttons">
        <button onClick={handleTurn}>{isTurnedOn ? 'Turn off' : 'Turn on'}</button>
      </section>

    </main>
  );
}
