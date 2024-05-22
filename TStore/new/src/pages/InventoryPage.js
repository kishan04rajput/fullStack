import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InventoryPage = () => {
  const { userName } = useParams();

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
  }, []);

  function handleDelete() {}

  return (
    <div>
      <h1>Inventory Page!</h1>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Size</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shirts.map((shirt) => (
            <tr key={shirt._id}>
              <td>{shirt.shirtImage}</td>
              <td>{shirt.shirtSize}</td>
              <td>{shirt.shirtPrice}</td>
              <td>
                <button className="btn btn-primary" onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        to={`/adminDashboard/${userName}/inventory/add`}
        className="btn btn-primary"
      >
        Add
      </Link>
    </div>
  );
};

export default InventoryPage;
