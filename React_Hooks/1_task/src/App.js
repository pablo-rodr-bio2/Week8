
import Hourglass from './components/Hourglass';
import WeatherContainer from './components/WeatherContainer';
import './css/style.css'
import { useCurrentPosition } from './components/CustomHooks'


function App() {

  const userPosition = useCurrentPosition()

  return (
    <div className="App">
      <main className="page">
        <section className="container">
          { !userPosition.success 
            ? <Hourglass /> 
            : <WeatherContainer didGetPosition={userPosition.success} position={userPosition.position} />}
        </section>
      </main>


    </div>
  );
}

export default App;
