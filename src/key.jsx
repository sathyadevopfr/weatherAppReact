import React from 'react'
import { useState } from 'react'
import '../src/style.css'
const Key = () => {
    let api = {
         key: `498b1cd402587cc9edf305fa679a441c`,
        base: `https://api.openweathermap.org/data/2.5/weather`
    }
    let [search, updateSearch] = useState("null")
    let [weather,updateWeather]=useState({})
    let locSearch = () => {
        fetch(`${api.base}?q=${search}&appid=${api.key}&units=metric`).then(res => res.json().then(data => {
             console.log(data)
            updateWeather(data)
           
        }))
    }
  return (
      <>
          <div id='cont'>
              {/* <div id='der'>
                    <h1>Weather in your city</h1>
               <input type="text" onChange={(o) => updateSearch(o.target.value)} 
                     placeholder='weather in your city'/>
            </div> */}
              <div className='co'>
                    <input type="text" onChange={(o) => updateSearch(o.target.value)} 
                     placeholder='Search a City'/>
  
              <button onClick={locSearch}>Click</button>
              <div className='str'>
                  {
                      (weather.main != undefined) ? (<div>
                              <div className='name'>
                                  <h3 > {weather.name} </h3>
                                  
                             <h5 className='cl'>{weather.weather[0].description}</h5>
                         </div>
                       
                          <div>
                          <span> {weather.main.temp} ,temperature from </span> <span>{weather.main.temp_max} to {weather.main.temp_min} ,winds {weather.wind.speed} m/s. clouds {weather.clouds.all}% ,{weather.main.pressure} hpa </span>
                              <p>Geo coords {`[${weather.coord.lat}, ${weather.coord.lon}]`}</p>
                              </div>
                          </div>) : <h2 className='data'>{ ("data not found")}</h2>
                  }
              </div>
                  
              </div>
         </div>
      </>
  )
    
}

export default Key