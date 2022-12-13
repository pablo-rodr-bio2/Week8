const Tile = ({color}) => {
    return <div key={color} className='tile' style={{backgroundColor: color}} >This is a tile</div>
}

export default Tile