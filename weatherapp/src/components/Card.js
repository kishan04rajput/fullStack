import React from "react";
import MiniCard from "./MiniCard";
import "./Card.css";

const Card = ({ props }) => {
    return (
        <div>
            <h2>{props.lName}</h2>
            <h3>{props.wDesc}</h3>
            <br />
            <h1 style={{ color: "#BDCACC" }}>{props.celcius + " °C"}</h1>
            <MiniCard props={props}></MiniCard>
        </div>
    );
};

export default Card;
