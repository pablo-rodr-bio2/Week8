const Tile = ({color}) => {
    return <div key={color} className='tile' style={{backgroundColor: color}} >{color}</div>
}

export default Tile