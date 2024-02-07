import { createContext,useState } from "react";

export const context = createContext();

const Context = ({children}) =>{
  
    const [city, setCity] = useState("New Delhi");
    const [weatherData , setWeatherData] = useState({});
    const [forecastData, setForecastData] = useState([]);
    const [error , setError] = useState(null);
    
    const data = {
      city,
      setCity,
      weatherData,
      setWeatherData,
      forecastData,
      setForecastData,
      error,
      setError,
    }
    return (
      <context.Provider value={data}>
         {children}
      </context.Provider>
    )
}

export default Context;
