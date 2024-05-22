import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    async function getAllShirts() {
      try {
        const response = await axios.get("http://localhost:4000/getShirts");
        setShirts(response.data);
      } catch (err) {
        console.log(err);
        alert(`Error check log! \n`, err);
      }
    }
    getAllShirts();
  }, []);

  const handleRemoveItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  const findShirtById = useCallback(
    (itemId) => {
      return shirts.find((shirt) => shirt._id === itemId);
    },
    [shirts]
  );

  return (
    <div>
      <h1>Cart Page</h1>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "10vw", listStyleType: 'none' }}>
        {items.map((item, index) => {
          const shirt = findShirtById(item);
          return (
            <li key={index}>
              {shirt ? (
                <div>
                  <img
                    src={shirt.shirtImage}
                    alt={`Shirt ${shirt._id}`}
                    style={{ width: "100px" , height:"100px"}}
                  />
                  <p>Size: {shirt.shirtSize}</p>
                  <p>Price: {shirt.shirtPrice}</p>
                  <button onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                </div>
              ) : (
                <p>Shirt not found</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartPage;
