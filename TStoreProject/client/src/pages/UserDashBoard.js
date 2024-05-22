import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

const UserDashBoard = () => {
  const dispatch = useDispatch();

  const { userName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProtectedData() {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:4000/userDashBoard/${userName}`,
        {
          headers: { Authorization: token },
        }
      );
      const data = await response.data;
      console.log(data);
      if (data === "UNAUTHORISED") {
        navigate("/login");
      }
    }

    fetchProtectedData();
  }, []);

  // useEffect(()=>{
  //   async function getAllShirts(){
  //     try {
  //       let response = await axios({
  //         method: "get",
  //         url: "http://localhost:4000/getShirts",
  //       });
  //       console.log("All Shirts!");
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //       alert(`Error check log! \n`, err);
  //     }
  //   }
  //   getAllShirts();
  // },[]);

  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    async function getAllShirts() {
      try {
        let response = await axios({
          method: "get",
          url: "http://localhost:4000/getShirts",
        });
        // console.log("All Shirts!");
        console.log(response.data);
        setShirts(response.data);
      } catch (err) {
        console.log(err);
        alert(`Error check log! \n`, err);
      }
    }
    getAllShirts();
    console.clear();
  }, []);

  const [cart, setCart] = useState([]);
  const [shirtId, setShirtId] = useState("");

  function handleAdd2Cart(event) {
    // console.log(event.target.id);
    const shirtID = event.target.id;
    setCart([...cart, shirtID]);
    setShirtId(shirtID);
    // dispatch({ type: "SET_ITEM", payload: [...cart, shirtID] });
    // setCart(event.target.id);
  }

  useEffect(() => {
    if (shirtId) {
      dispatch({ type: "ADD_ITEM", payload: shirtId });
    }
  }, [shirtId]);

  useEffect(() => {
    // async function add2Cart(){
    //   try {
    //     let response = await axios({
    //       method: "post",
    //       url: "http://localhost:4000/add2Cart",
    //     });
    //     console.log(response.data);
    //     setShirts(response.data);
    //   } catch (err) {
    //     console.log(err);
    //     alert(`Error check log! \n`, err);
    //   }
    // }

    // add2Cart();
    // dispatch({ type: 'SET_ITEM', payload: [cart] });
    // dispatch({ type: 'SET_ITEM', payload: [...cart, shirtID] });
    console.log("cart");
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <h1>Welcome {userName}!</h1>
      <Link to={`/userDashBoard/${userName}/cart`} className="btn btn-primary">
        Cart
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10vw" }}>
        {shirts.map((shirt) => (
          <div
            className="card"
            style={{ width: "40vw", textAlign: "center" }}
            key={shirt._id}
          >
            <img
              src={shirt.shirtImage}
              className="card-img-top"
              alt="shirtImage"
              style={{ width: "100%", height: "90%" }}
            />
            <div className="card-body">
              <h5 className="card-title">{shirt.shirtSize}</h5>
              <p className="card-text">{shirt.shirtPrice}</p>
              <button
                className="btn btn-primary"
                onClick={handleAdd2Cart}
                id={shirt._id}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashBoard;
