import { react, useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({foundCountry}) => {
    
    const [currentWeather, setCurrentWeather] = useState([])

    const location = foundCountry.name
    const data = () => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=281aea9d6a0fa60f6d88eaba8c23672f&query=${location}`)
            .then((res) => {
                console.log(res.data);
            setCurrentWeather(res.data)
        })
    }
   
        useEffect(data, [])

    return (
        <div>
            {currentWeather? `${currentWeather.current.temperature}C` : ''}
           {/* {currentWeather.current.temperature}C */}
        </div>
    )
}

export default Weather