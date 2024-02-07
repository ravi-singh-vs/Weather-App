import React, { useContext } from 'react'
import Weather from "../components/weather/Weather"
import Search from "../components/search/Search";
import { context } from '../context/Context';

const Home = () => {
  const {weatherData} = useContext(context);
  return (
    <div className='home'>
        <Search/>
        {Object.keys(weatherData).length>0 && <Weather/>}
    </div>
  )
}

export default Home