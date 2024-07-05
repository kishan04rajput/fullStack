import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const BookingHistory = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const bookingHistory = userInfo.booking || [];
  const [hotelInfo, setHotelInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotelInfo = async () => {
      try {
        const hotelDataPromises = bookingHistory.map((bookingId) =>
          axios.get(`/api/hotels/find/${bookingId}`)
        );
        const hotelDataResponses = await Promise.all(hotelDataPromises);
        const hotels = hotelDataResponses.map((response) => response.data);
        setHotelInfo(hotels);
      } catch (error) {
        console.error("Error fetching hotel information:", error);
      } finally {
        setLoading(false);
      }
    };

    if (bookingHistory.length > 0) {
      fetchHotelInfo();
    } else {
      setLoading(false);
    }
  }, [bookingHistory]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : hotelInfo.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hotelInfo.map((hotel, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={hotel.photos}
                alt={hotel.name}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{hotel.name}</h2>
                <p className="text-gray-600">{hotel.desc}</p>
                <p className="text-gray-600">Address: {hotel.address}</p>
                <p className="text-gray-600">City: {hotel.city}</p>
                <p className="text-gray-600">Price: ${hotel.cheapestPrice}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No bookings found</div>
      )}
    </div>
  );
};
