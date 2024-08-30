import style from './App.module.css'
import Form from './components/Form/Form'
import Spiner from './components/Spiner/Spiner';
import Error from "../src/components/Error/Error"
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import useWeather from './hooks/useWeather';

function App() {
  const {weather, loading, notFound, hasWeatherData, fetchWeather} = useWeather();
  return (
    <>
      <h1 className={style.title}>Buscador de Clima</h1>
      <div className={style.container}>
        
        <Form
          fetchWeather={fetchWeather}
        />
        
        {loading && <Spiner/>}
        {hasWeatherData && <WeatherDetails weather={weather}/>}
        {(notFound && !hasWeatherData) && <Error>{'Ciudad no encontrada'}</Error>}
      </div>
    </>
  )
}

export default App
