import React, { useState, useEffect } from "react";
import axios from "axios";
import { faSun, faCloud, faCloudShowersHeavy, faSnowflake, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function DashboardWeather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=51.48&longitude=-3.18&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,uv_index&current_weather=true&forecast_days=3")
            .then(response => setWeatherData(response.data))
            .catch(error => console.error(error));
    }, []);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const codeMap = {
        0: { description: "Clear sky", icon: faSun },
        1: { description: "Mainly clear", icon: faSun },
        2: { description: "Partly cloudy", icon: faCloud },
        3: { description: "Overcast", icon: faCloud },
        45: { description: "Fog and depositing rime fog", icon: faCloud },
        48: { description: "Fog and depositing rime fog", icon: faCloud },
        51: { description: "Drizzle: Light intensity", icon: faCloudShowersHeavy },
        53: { description: "Drizzle: Moderate intensity", icon: faCloudShowersHeavy },
        55: { description: "Drizzle: Dense intensity", icon: faCloudShowersHeavy },
        56: { description: "Freezing Drizzle: Light intensity", icon: faCloudShowersHeavy },
        57: { description: "Freezing Drizzle: Dense intensity", icon: faCloudShowersHeavy },
        61: { description: "Rain: Slight intensity", icon: faCloudShowersHeavy },
        63: { description: "Rain: Moderate intensity", icon: faCloudShowersHeavy },
        65: { description: "Rain: Heavy intensity", icon: faCloudShowersHeavy },
        66: { description: "Freezing Rain: Light intensity", icon: faSnowflake },
        67: { description: "Freezing Rain: Heavy intensity", icon: faSnowflake },
        71: { description: "Snow fall: Slight intensity", icon: faSnowflake },
        73: { description: "Snow fall: Moderate intensity", icon: faSnowflake },
        75: { description: "Snow fall: Heavy intensity", icon: faSnowflake },
        77: { description: "Snow grains", icon: faSnowflake },
        80: { description: "Rain showers: Slight intensity", icon: faCloudShowersHeavy },
        81: { description: "Rain showers: Moderate intensity", icon: faCloudShowersHeavy },
        82: { description: "Rain showers: Violent intensity", icon: faCloudShowersHeavy },
        85: { description: "Snow showers: Slight intensity", icon: faSnowflake },
        86: { description: "Snow showers: Heavy intensity", icon: faSnowflake },
        95: { description: "Thunderstorm: Slight or moderate", icon: faBolt },
        96: { description: "Thunderstorm with slight hail", icon: faBolt },
        99: { description: "Thunderstorm with heavy hail", icon: faBolt },
      };
      


    return (
        <div>
            <h2>Current Weather</h2>
            <FontAwesomeIcon size="2xl" icon={codeMap[weatherData.current_weather.weathercode].icon} />
            <h2>Weather Forecast</h2>
            <div style={{ display: 'flex' ,flexDirection: 'row', overflow: 'scroll', gap: '8px' }}>
            {
                weatherData.hourly.temperature_2m.map((_, index) =>
                (
                    <div key={index}>
                        <span>{weatherData.hourly.time[index].split("T")[0]}</span>
                        <span>{weatherData.hourly.time[index].split("T")[1]}</span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>{weatherData.hourly.temperature_2m[index]}°C</span>
                            <span><FontAwesomeIcon size="xl" icon={codeMap[weatherData.hourly.weathercode[index]].icon}/></span>
                        </div>
                    </div>
                )

                )
            }
            </div>

        </div>
    );
}

export default DashboardWeather;
