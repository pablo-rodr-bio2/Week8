const Button = ({ tiles, changeNumberTiles, value }) => {

    let isDisabled = false
    if((value === '+' && tiles.length === 9) ||
       (value === '-' && tiles.length === 0)) {
            isDisabled = true
        } else {
            isDisabled = false
        }

    return <button onClick={changeNumberTiles} className="btn__number" disabled={isDisabled}>{value}</button>
}

export default Button