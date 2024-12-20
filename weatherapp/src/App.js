import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import YourWeather from "./pages/YourWeather";
import SearchWeather from "./pages/SearchWeather";

function App() {
    return (
        <div className="wrapper">
            <h1>WEATHER APP</h1>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<YourWeather />}></Route>
                <Route path="/searchCity" element={<SearchWeather />}></Route>
            </Routes>
        </div>
    );
}

export default App;
