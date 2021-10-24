import React, { useEffect , useState} from 'react'

const Weathercard = ({tempInfo}) => {
    const[weatherState,setWeatherState] = useState()
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
} = tempInfo; 

useEffect(()=>{
      if(weathermood){
          switch(weathermood){
          case "Clouds": setWeatherState("images/cloudy.png");
          break;
          case "Haze": setWeatherState("images/haze.png");
          break;
          case "Clear": setWeatherState("images/clear.png");
          break;
          case "Mist": setWeatherState("images/mist.png");
          break;
          case "Rain": setWeatherState("images/rain.png");
          break;
          case "Thunderstorm": setWeatherState("images/thunder.png");
          break;
          default:
              setWeatherState("images/clear.png");
              break;
          }
      }
},[weathermood]);

let sec=sunset;
let date=new Date(sec*1000);
let timeStr= `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <div className="widget">
                <div className="weatherIcon">
                    <img src={weatherState} alt="weather mood" />
                </div>
                <div className="weather">
                    <div className="weatherInfo">
                        <div className="temperature">
                            <span>{temp}&deg;</span>
                        </div>
                        <div className="description">
                            <div className="weatherCondition">
                                {weathermood}
                            </div>
                            <div className="place">{name},{country}</div>
                        </div>
                    </div>
                    <div className="date">
                        <span>{new Date().toLocaleString()}</span></div>
                </div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">

                            <img src="images/sunset.png" alt="sunset"></img>

                            <p className="extra-info-leftside">
                                Sunset<br />
                                {timeStr} PM
                            </p>
                        </div>
                        <div className="two-sided-section">

                            <img src="images/humidity.png" alt="sunset"></img>

                            <p className="extra-info-leftside">
                                Humidity<br />
                                {humidity}
                            </p>
                        </div>
                        <div className="weather-extra-info">
                            <div className="two-sided-section">

                                <img src="images/pressure.png" alt="sunset"></img>

                                <p className="extra-info-leftside">
                                    Pressure<br />
                                    {pressure} mm
                                </p>
                            </div>
                            <div className="two-sided-section">

                                <img src="images/wind.png" alt="sunset"></img>

                                <p className="extra-info-leftside">
                                    Wind<br />
                                    {speed}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weathercard
