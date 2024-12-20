import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const YourWeather = () => {
    const [weather, setWeather] = useState(null);
    const [data, setData] = useState({
        lName: "",
        wDesc: "",
        celcius: "",
        windspeed: "",
        humidity: "",
        clouds: "",
        feelsLike: "",
    });

    const [latitude, setLatitude] = useState(28.62623);
    const [longitude, setLongitude] = useState(77.21808);
    //default place parliament house of india

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8644c9443114356be21cea7f648e8ef9&units=metric`;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }

        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
            } catch (e) {
                console.error("Error fetching weather data:", e);
            }
        };

        getData();
    }, [latitude, longitude, url]);

    useEffect(() => {
        if (weather) {
            setData({
                lName: weather.name,
                wDesc: weather.weather[0].description,
                celcius: weather.main.temp,
                windspeed: weather.wind.speed + " m/s",
                humidity: weather.main.humidity + "%",
                clouds: weather.clouds.all + "%",
                feelsLike: weather.main.feels_like,
            });
        }
    }, [weather]);

    return (
        <div>
            {weather ? <Card props={data} /> : <p>Loading weather data...</p>}
        </div>
    );
};

export default YourWeather;
