import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.map((hotel) => (
          <li key={hotel._id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.city}</p>
            <p>{hotel.address}</p>
            <p>{hotel.desc}</p>
            <p>Rating: {hotel.rating}</p>
            <p>Price: ${hotel.cheapestPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
