const Button = ({ tiles, setTiles, value }) => {
    const generateRandomcolor = () => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
      }

    const changeNumberTiles = (event) => {

        event.target.textContent === '+' ?
        setTiles(current => [...current, generateRandomcolor()]) :
        setTiles(current => current.slice(0, -1))
    
      }

    let isDisabled = false
    if((value === '+' && tiles.length === 6) ||
       (value === '-' && tiles.length === 0)) {
            isDisabled = true
        } else {
            isDisabled = false
        }
        
    return <button onClick={changeNumberTiles} className="btn__number" disabled={isDisabled}>{value}</button>
}

export default Button