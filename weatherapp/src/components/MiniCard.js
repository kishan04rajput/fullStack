import React from "react";
import "./MiniCard.css";
import Wind from "../assets/wind.png";
import Humidity from "../assets/humidity.png";
import Clouds from "../assets/cloud.png";

const MiniCard = ({ props }) => {
    return (
        <div className="MiniCard">
            <div id="clouds">
                <img src={Wind} alt="logo" />
                <div>FEELS LIKE</div>
                <div>{props.feelsLike + " °C"}</div>
            </div>
            <div id="windspeed">
                <img src={Wind} alt="logo" />
                <div>WINDSPEED</div>
                <div>{props.windspeed}</div>
            </div>
            <div id="humidity">
                <img src={Humidity} alt="logo" />
                <div>HUMIDITY</div>
                <div>{props.humidity}</div>
            </div>
            <div id="clouds">
                <img src={Clouds} alt="logo" />
                <div>CLOUDS</div>
                <div>{props.clouds}</div>
            </div>
        </div>
    );
};

export default MiniCard;
