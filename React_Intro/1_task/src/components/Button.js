const Button = ({ tiles, changeNumberTiles, value }) => {

    const isDisabled = ((value === '+' && tiles.length === 9) || (value === '-' && tiles.length === 0)) 

    return <button onClick={changeNumberTiles} className="btn__number" disabled={isDisabled}>{value}</button>
}

export default Button