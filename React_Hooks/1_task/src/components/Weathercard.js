import React from 'react'

const imageURI = 'https://developer.accuweather.com/sites/default/files/'

function Weathercard({ dailyForecast }) {

  const formatDate = (date) => {
    const dateToFormat = new Date(date)
    return `${dateToFormat.getMonth() +1 }/${dateToFormat.getDate()}`
  }

  return (
    <div className="weatherCard">
        card
          <section className="weatherCard__date">
            {formatDate(dailyForecast.Date)}
          </section>

          <section className="weatherCard__picture">
            <img src={`${imageURI}${dailyForecast.Day.Icon}-s.png`} alt="icon"></img>
          </section>

          <section className="weatherCard__condition">
            {dailyForecast.Day.ShortPhrase}
          </section>

          <section className="weatherCard__temperature">
            <span className="weatherCard__temperature_max">{dailyForecast.Temperature.Maximum.Value}</span>/
            <span className="weatherCard__temperature_min">{dailyForecast.Temperature.Minimum.Value}</span>
          </section>
        </div>
  )
}

export default Weathercard