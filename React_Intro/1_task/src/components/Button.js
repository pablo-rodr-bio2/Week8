const Button = ({ totalTiles, setTiles, children }) => {

    

    const generateRandomcolor = () => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
      }

    const handleNumberTiles = (event) => {

        event.target.textContent === '+' ?
        setTiles(current => [...current, generateRandomcolor()]) :
        setTiles(current => current.slice(0, -1))
    
      }

    const isDisabled = ((children === '+' && totalTiles === 9) || (children === '-' && totalTiles === 0)) 

    return <button onClick={handleNumberTiles} className="btn__number" disabled={isDisabled}>{children}</button>
}

export default Button