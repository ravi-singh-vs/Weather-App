import './WeatherCard.css'

const WeatherCard = ({weatherInfo : {icon,date,region,weather,minTemp,maxTemp}, className}) =>{
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
    <div className={className}>
      { className==="weatherCard" ?( 
       <>
        <h2>{date}</h2> <br />
        <img src={iconUrl} alt="weatherImage"  />
       </>
       ) :(
        <h2><u>Today's Weather</u> :</h2>
       )
      }
       <p><b>City : </b>{region}</p>
       <p><b>Weather :</b> {weather}</p>
       <p><b>Minimum Temp :</b> {minTemp} <sup>0</sup>C</p>
       <p><b>Maximum Temp :</b> {maxTemp} <sup>0</sup>C</p>
      </div>
     )
}

export default WeatherCard