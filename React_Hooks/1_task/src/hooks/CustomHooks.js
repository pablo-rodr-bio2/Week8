import { useEffect, useState } from 'react';

// const URI_locationID = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?'
// const API_KEY = '60DkEgIo47PzMx5HhSxgpTz2GjNy0PTJ';
// const URI_forecast = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day'
const LOCAL_URL = 'http://localhost:5000/tasks'

export const useCurrentPosition = () => {
    const [position, setPosition] = useState({ lat: null, long: null })
    const [success, setSuccess] = useState()
    const [error, setError] = useState(false)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {

            const newUserPos = {
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
            }

            setPosition(newUserPos)
            setSuccess(true)

        }, (err) => {

            setPosition(undefined)
            setError(true)
            console.log(err.message);
        });
    }, [])

    return { position, success, error }
}




export const useWeatherData = (shouldRun, position, city) => {

    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)

                let newData

                if (position) {
                    newData = await fetchDataByPosition(position)
                }

                if (city) {
                    newData = await fetchDataByCity(city)
                }

                setWeatherData(() => newData)

                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)

            }
        };
        if (shouldRun || city) {
            setLoading(true);
            fetchData()
            setLoading(false);
        }


    }, [shouldRun, position, city])

    return { weatherData, loading, error }
}

const fetchDataByPosition = async (position) => {
    

    try {

        const response = await fetch(LOCAL_URL)
        const weatherData = await response.json()
        const newData = { localizedName: weatherData[0].LocalizedName, dailyForecasts: weatherData[0].DailyForecasts }
        return newData

    } catch(error) {
        console.log(error)
        return
    }

}

const fetchDataByCity = async (cityName) => {
    try {

        const response = await fetch(`${LOCAL_URL}?LocalizedName=${cityName}`)
        const weatherData = await response.json()
        const newData = { localizedName: weatherData[0].LocalizedName, dailyForecasts: weatherData[0].DailyForecasts }
        return newData
    } catch (error) {
        console.log(error)
        return
    }
}



/* Legacy code, use in case of functional API */
// get locationId from position's lat and long
// const response = await fetch(`${URI_locationID}apikey=${API_KEY}&q=${position.lat},${position.long}`)
// const location = await response.json()
// const locationId = location.Key


// // get weather report from locationId
// const res = await fetch(`${URI_forecast}/${locationId}?apikey=${API_KEY}&details=true`)
// const weatherData = await res.json()
// const newData = { localizedName: location.LocalizedName, dailyForecasts: weatherData.DailyForecasts }

// const response = await fetch(LOCAL_URL)
// const weatherData = await response.json()
// const newData = { localizedName: weatherData[0].LocalizedName, dailyForecasts: weatherData[0].DailyForecasts }