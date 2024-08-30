import axios from "axios";
import { SearchType} from "../types"
import { z } from 'zod'
import { useMemo, useState } from "react";

const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
})

export type Weather = z.infer<typeof Weather>

export default function useWeather (){
    const initialState = {
        name: '',
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0
        }
    }

    const [weather, setWeather] = useState<Weather>(initialState);
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const fetchWeather = async (search: SearchType) =>{
        const apiId = import.meta.env.VITE_API_KEY;
        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiId}`;
            const {data } = await axios(url);
            setLoading(true)
            setWeather(initialState)

            if(!data[0]){
                setNotFound(true);
                return;
            }
            const lon = data[0].lon;
            const lat = data[0].lat;

            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`
            
            const {data: weatherResult} = await axios(url2);
            const result = Weather.safeParse(weatherResult)
            if(result.success){
                setWeather(result.data)
            }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false);
           
        }
    }

    const hasWeatherData = useMemo(()=> weather.name, [weather])

    return {
        weather,
        loading,
        notFound,
        hasWeatherData,
        fetchWeather
    }
}