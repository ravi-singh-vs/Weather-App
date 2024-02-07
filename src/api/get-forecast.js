import { checkResponse } from "../utils/index";

//--------- USING ASYNC AND AWAIT -----------------

export const fetchForecastData = async(region) =>{
    try{
        const res = await  fetch(`${import.meta.env.VITE_FORECAST_API}${region}&appid=${import.meta.env.VITE_API_KEY}`);

        checkResponse(res);

        const data = await res.json();

        const forecast = [];

        const list = [...data.list];

        let i = 0, count = 0;

        while(i<list.length)
        {
            const date = new Date(list[i]["dt_txt"]).getDate();
            const utcDate = new Date();
            const currDate = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000)).getUTCDate();
            console.log(utcDate,date)
            if(date > currDate) break;
            i++;
        }

        while(count<3 && i<list.length)
        {
            forecast.push({
                weather :  list[i].weather[0].main,
                region : data.city.name,
                minTemp  : (list[i].main.temp_min-273.15).toFixed(2),
                maxTemp : (list[i].main.temp_max-270.15).toFixed(2),
                date :  `${new Date(list[i].dt_txt).toDateString()}`,
                icon : `${list[i].weather[0].icon.slice(0,-1)}d`,
            });
            i+=8;
            count++;
        }
        return{
            data :  [...forecast],
            success : true,
        }

    }catch(err){
        console.log("Forecast API error : " ,err.message)
        return {
            success :false,
            error : err.message
        }
    }
}

//------------------- USING THEN AND CATCH -------------------

// export const fetchForecastData = async (region) => {
//   return fetch(
//     `${import.meta.env.VITE_FORECAST_API}${region}&appid=${
//       import.meta.env.VITE_API_KEY
//     }`
//   )
//     .then((res) => {
//       checkResponse(res);
//       return res.json();
//     })
//     .then((data) => {
//       const forecast = [];

//       const list = [...data.list];

//       let i = 0,
//         count = 0;

//       while (i < list.length) {
//         const date = new Date(list[i]["dt_txt"]).getDate();
//         const utcDate = new Date();
//         const currDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000).getUTCDate();
//         if (date > currDate) break;
//         i++;
//       }

//       while (count < 3 && i < list.length) {
//         forecast.push({
//           weather: list[i].weather[0].main,
//           region: data.city.name,
//           minTemp: (list[i].main.temp_min - 273.15).toFixed(2),
//           maxTemp: (list[i].main.temp_max - 270.15).toFixed(2),
//           date: `${new Date(list[i].dt_txt).toDateString()}`,
//           icon: `${list[i].weather[0].icon.slice(0, -1)}d`,
//         });
//         i += 8;
//         count++;
//       }
//       return {
//         data: [...forecast],
//         success: true,
//       };
//     })
//     .catch((err) => {
//       console.log("Forecast API error : ", err.message);
//       return {
//         success: false,
//         error: err.message,
//       };
//     });
// };
