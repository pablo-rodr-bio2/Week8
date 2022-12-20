import Hourglass from './components/Hourglass';
import WeatherContainer from './components/WeatherContainer';
import './css/style.css'
import { useCurrentPosition, useWeatherData } from './components/CustomHooks'
import SearchCity from './components/SearchCity';
import { useEffect, useState } from 'react';


function App() {

  const userPosition = useCurrentPosition()

  const [ weatherData, setWeatherData ] = useState()

  const { data, loading, error } = useWeatherData(userPosition.success, userPosition.position)

  useEffect(() => {
    if(userPosition.success) {
      setWeatherData(data)
    } 
  }, [userPosition.success, data])

  return (
    <div className="App">
      <main className="page">
        <section className="container">
          { userPosition.error
          ? <>
              <SearchCity setWeatherData={setWeatherData}/>
              { weatherData &&
                <WeatherContainer data={weatherData} loading={loading}/>
              }
            </>
          : !userPosition.success
            ? <Hourglass /> 
            : <WeatherContainer data={weatherData} loading={loading}/>
          } 
        </section>
      </main>


    </div>
  );
}

export default App;
