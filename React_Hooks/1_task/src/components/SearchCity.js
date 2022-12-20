import React, {useState} from 'react'
import { fetchDataByCity } from './CustomHooks';

function SearchCity({ setWeatherData}) {

    const [cityName, setCityName] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await fetchDataByCity(cityName)
        console.log(data)
        setWeatherData(data)
      }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setCityName(e.target.value)} placeholder="Enter your City"></input>
            <button type="submit">Send</button>
        </form>
    )
}

export default SearchCity