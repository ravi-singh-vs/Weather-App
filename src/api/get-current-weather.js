import { checkResponse } from "../utils/index";

//------------ USING ASYNC AND AWAIT ------------------------

export const fetchWeatherData = async (region) => {
  try {
    if (!region.trim()) return;
    const res = await fetch(
      `${import.meta.env.VITE_CURR_WEATHER_API}${region}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    checkResponse(res);
    const data = await res.json();

    const weatherData = {
      data: {
        weather: data.weather[0].main,
        region: data.name,
        minTemp: (data.main.temp_min - 273.15).toFixed(2),
        maxTemp: (data.main.temp_max - 270.15).toFixed(2),
      },
      success: true,
    };
    return weatherData;
  } catch (err) {
    alert(err.message);
    console.log("Current Weather API error : ", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
};

//------------ USING THEN AND CATCH -----------------------

// export const fetchWeatherData= async(region) =>{

//     if(!region.trim()) return;

//     return fetch(`${import.meta.env.VITE_CURR_WEATHER_API}${region}&appid=${import.meta.env.VITE_API_KEY}`)
//     .then((res)=>{
//         checkResponse(res);
//         return res.json();
//     })
//     .then((data)=>{
//         const weatherData = {
//             data :{
//                 weather :  data.weather[0].main,
//                 region : data.name,
//                 minTemp  : (data.main.temp_min-273.15).toFixed(2),
//                 maxTemp : (data.main.temp_max-270.15).toFixed(2),
//                 } ,
//             success : true
//         }
//         return  weatherData;
//     }).catch((err) =>{
//         alert(err.message);
//         // console.log("Current Weather API error : " ,err.message)
//         return {
//             success :false,
//             error : err.message
//         }
//     })
// }
