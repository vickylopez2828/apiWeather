import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"
import style from './Weather.module.css'

type WeatherDetailsProps ={
    weather: Weather
}

const WeatherDetails = ({weather}: WeatherDetailsProps) => {
  return (
    <div className={style.container}>
        <h2>Clima de:{''}{''} <span className={style.city}>{weather.name}</span>  </h2>
        <p className={style.current}>{formatTemperature(weather.main.temp)}&deg;C</p>
        <div className={style.temperatures}>
            <p>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span> </p>
            <p>Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span> </p>
        </div>
    </div>
  )
}

export default WeatherDetails
