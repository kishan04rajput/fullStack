import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export const UserDashboardPage = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getHotels() {
      try {
        const response = await axios.get("/api/hotels/");
        // console.log("--->response.data\n", response.data);
        setHotels(response.data);
      } catch (error) {
        console.log("Error fetching hotels: ", error);
      }
    }
    getHotels();
  }, []);

  async function handleBook(hotelId) {
    // alert("Handle book called!");
    console.log(hotelId);
    try {
      const response = await axios.post(`/api/hotels/book/${hotelId}`);
      console.log("--->response\n", response);
    } catch (error) {
      console.log("--->error\n", error);
      if (error.response.status === 404) {
        alert("Please Login!");
        navigate("/login");
      }
    }
  }

  const CalendarModal = ({ show, onClose, startDate, setStartDate }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Select a Date</h2>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const HotelCard = ({
    _id,
    name,
    address,
    photos,
    desc,
    rating,
    rooms,
    cheapestPrice,
  }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const openCalendar = () => setShowCalendar(true);
    const closeCalendar = () => setShowCalendar(false);

    return (
      <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden m-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={photos}
              alt={name}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {name}
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-black">
              {address}
            </div>
            <p className="mt-2 text-gray-500">{desc}</p>
            <div className="mt-4">
              <span className="text-gray-900 font-bold">Rating: </span>
              <span className="text-gray-700">{rating}</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-900 font-bold">Rooms: </span>
              <span className="text-gray-700">{rooms}</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-900 font-bold">Cheapest Price: </span>
              <span className="text-gray-700">${cheapestPrice}</span>
            </div>
            <div className="mt-4">
              <button
                onClick={() => handleBook(_id)}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500"
              >
                Book Now
              </button>
            </div>
            <CalendarModal
              show={showCalendar}
              onClose={closeCalendar}
              startDate={startDate}
              setStartDate={setStartDate}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        {hotels.length > 0 ? (
          <div className="flex flex-wrap justify-center">
            {hotels.map((hotel) => (
              <HotelCard
                key={hotel._id}
                _id={hotel._id}
                name={hotel.name}
                address={hotel.address}
                photos={hotel.photos}
                desc={hotel.desc}
                rating={hotel.rating}
                rooms={hotel.rooms}
                cheapestPrice={hotel.cheapestPrice}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-center text-2xl mt-4">Nothing to show here</h1>
        )}
      </div>
    </div>
  );
};
