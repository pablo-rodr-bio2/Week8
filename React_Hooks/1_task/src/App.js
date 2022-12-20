import Hourglass from './components/Hourglass';
import WeatherContainer from './components/WeatherContainer';
import './css/style.css'
import { useCurrentPosition, useWeatherData } from './hooks/CustomHooks'
import SearchCity from './components/SearchCity';
import { useState } from 'react';

// SearchCity should notify App to ask actions, not to delegate actions from App to SearchCity
function App() {

  const [city, setCity] = useState()

  const userPosition = useCurrentPosition()

  const { weatherData, loading, error } = useWeatherData(userPosition.success, userPosition.position, city)

  console.log('rendered')

  const handleCityName = (event, cityName) => {
    event.preventDefault();
    setCity(cityName)
  }

  if(weatherData) return <WeatherContainer data={weatherData} loading={loading} error={error} />

  if(userPosition.error) return  <SearchCity handleCityName={handleCityName} />

  if(!userPosition.success) return <Hourglass />


}

export default App;
