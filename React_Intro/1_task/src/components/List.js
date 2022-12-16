import Tile from './Tile'

const List = ({ tiles }) => (
        <>
            {tiles.map(color => <Tile key={color} color={color}/>)}
        </>

)

export default List