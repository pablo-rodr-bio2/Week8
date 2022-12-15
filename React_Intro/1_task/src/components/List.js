import Tile from './Tile'

const List = ({ tiles }) => {

    return (
        <>
            {tiles.map(color => {
                return <Tile key={color} color={color}/>
            })}
        </>

    )
}

export default List