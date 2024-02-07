import React, { useContext } from 'react'
import { context } from '../../context/Context';
import WeatherCard from '../weatherCard/WeatherCard';
import './Weather.css'

const Weather = () => {
  const {weatherData,forecastData} = useContext(context);
  
  return (
    <div className="weather">
      <WeatherCard className="todayWeather" weatherInfo={weatherData}/>
      <div className='forecast'>
       {
          forecastData.map((forecast,idx)=><WeatherCard key={idx} weatherInfo={forecast} className="weatherCard" />)
       }
     </div>
    </div>
  )
}

export default Weather;