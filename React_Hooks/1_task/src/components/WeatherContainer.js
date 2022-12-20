import React from 'react'
import Weathercard from './Weathercard'
import Hourglass from './Hourglass'

function WeatherContainer({ data, loading }) {

   
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
                            data.dailyForecasts.map(dailyForecast => <Weathercard key={dailyForecast.id} dailyForecast={dailyForecast}/>)
                        }
                    </section>
                </>
            }

        </>

    )
}

export default WeatherContainer