import React from 'react'
import Weathercard from './Weathercard'
import { useWeatherData } from './CustomHooks'
import Hourglass from './Hourglass'

function WeatherContainer({ didGetPosition, position }) {

    const { data, loading, error } = useWeatherData(didGetPosition, position)
    console.log(data)
    return (
        <>

            <h1 className="container__title">How's the weather?</h1>
            {loading
                ? <Hourglass />
                : data &&
                <>
                    <h2 className="container__city">{data.localizedName}</h2>
                    <section className="container__weather">
                        {
                            data.dailyForecasts.map(dailyForecast => <Weathercard dailyForecast={dailyForecast}/>)
                        }
                    </section>
                </>}




        </>

    )
}

export default WeatherContainer