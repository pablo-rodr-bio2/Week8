import React from 'react'

const imageURI = 'https://developer.accuweather.com/sites/default/files/'

const formatDate = (date) => {
  const dateToFormat = new Date(date)
  return `${dateToFormat.getMonth() +1 }/${dateToFormat.getDate()}`
}

const formatDayIcon = (iconNumber) => {
  if(iconNumber >=1 && iconNumber <=9) return `0${iconNumber.toString()}`
}

const convertFarenToCelsius = (temperature) => parseInt((temperature-32)/1.8)

function Weathercard({ dailyForecast }) {

  return (
    <div className="weatherCard">
          <section className="weatherCard__date">
            {formatDate(dailyForecast.Date)}
          </section>

          <section className="weatherCard__picture">
            <img src={`${imageURI}${formatDayIcon(dailyForecast.Day.Icon)}-s.png`} alt="icon"></img>
          </section>

          <section className="weatherCard__condition">
            {dailyForecast.Day.ShortPhrase}
          </section>

          <section className="weatherCard__temperature">
            <span className="weatherCard__temperature_max">{convertFarenToCelsius(dailyForecast.Temperature.Maximum.Value)}</span>/
            <span className="weatherCard__temperature_min">{convertFarenToCelsius(dailyForecast.Temperature.Minimum.Value)}</span>
          </section>
        </div>
  )
}

export default Weathercard