import React, { useContext, useEffect, } from 'react'
import { context } from '../../context/Context';
import { fetchWeatherData } from '../../api/get-current-weather'
import { fetchForecastData } from '../../api/get-forecast'
import './Search.css'
const Search = () => {
    
    const {city , setCity ,setWeatherData ,setForecastData,setError} = useContext(context);
   
    const fetchData = async() =>{
      const weatherResponse = await fetchWeatherData(city);

        if(weatherResponse.success){
          setError(null);
          setWeatherData(weatherResponse.data) ;
        }else{
          setError(weatherResponse.error);
        }
        const forecastResponse = await fetchForecastData(city);
        if(forecastResponse.success){
          setError(null);
          setForecastData(forecastResponse.data) 
        }else{
          setError(forecastResponse.error);
        }
    }
    const submitHandler = async(e) =>{
        e.preventDefault();
        fetchData();
    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    <form onSubmit={submitHandler} id='mainSearchForm'>
    <input type="text" placeholder="Enter Region"  value={city} onChange={(e)=>setCity(e.target.value)} />
    <button>Search</button>
   </form>
  )
}

export default Search;