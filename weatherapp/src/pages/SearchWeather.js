import React, { useState } from "react";
import Card from "../components/Card";
import Search from "../assets/search.png";
import notFound from "../assets/not-found.png";
import "./SearchWeather.css";

const SearchWeather = () => {
    const [city, setCity] = useState("delhi");
    const [data, setData] = useState({
        lName: "",
        wDesc: "",
        celcius: "",
        windspeed: "",
        humidity: "",
        clouds: "",
        feelsLike: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8644c9443114356be21cea7f648e8ef9&units=metric`
            );
            const weather = await response.json();
            setData({
                lName: weather.name,
                wDesc: weather.weather[0].description,
                celcius: weather.main.temp,
                windspeed: weather.wind.speed + " m/s",
                humidity: weather.main.humidity + "%",
                clouds: weather.clouds.all + "%",
                feelsLike: weather.main.feels_like,
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="cityName"
                    id="cityName"
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "1%",
                        fontSize: "larger",
                        color: "white",
                        backgroundColor: "#617186",
                    }}
                    placeholder="Enter city name..."
                />
                <button
                    type="submit"
                    style={{ width: "30%", backgroundColor: "#2E517F" }}
                >
                    <img src={Search} alt="logo" />
                </button>
            </form>
            <br />
            {data.lName ? (
                <Card props={data}></Card>
            ) : (
                <img src={notFound} alt="logo" style={{ width: "10vw" }} />
            )}
        </div>
    );
};

export default SearchWeather;
