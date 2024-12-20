import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <NavLink to={"/"} className={"item"}>
                Your Weather
            </NavLink>
            <NavLink to={"/searchCity"} className={"item"}>
                Search City Weather
            </NavLink>
        </nav>
    );
};

export default Navbar;
