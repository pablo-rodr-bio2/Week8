import Tile from './Tile'

const List = ({ tiles }) => {

    return (
        <>
            {tiles.map(color => {
                return <Tile color={color}/>
            })}
        </>

    )
}

export default List