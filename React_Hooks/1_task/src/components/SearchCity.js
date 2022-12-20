import React, {useState} from 'react'

function SearchCity({ handleCityName}) {

    const [cityName, setCityName] = useState('')


    return (
        <form onSubmit={(e) => handleCityName(e, cityName)}>
            <input type="text" onChange={(e) => setCityName(e.target.value)} placeholder="Enter your City"></input>
            <button type="submit">Send</button>
        </form>
    )
}

export default SearchCity