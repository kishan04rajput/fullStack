import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AddInventoryPage = () => {
  // const navigate = useNavigate();
  const { userName } = useParams();

  const [si, setSI] = useState(""); //si = shirt image
  const [ss, setSS] = useState(""); //ss = shirt size
  const [sp, setSP] = useState(""); //sp = shirt price
  const [shirts, setShirts] = useState([]);
  // function handleInventory() {
  // navigate("/adminDashboard/:userName/inventory");
  // navigate({`/userDashBoard/${userName}/inventory`});
  // }

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

  function handleSI(event) {
    // console.log(event.target.value);
    setSI(event.target.value);
  }

  function handleSS(event) {
    // console.log(event.target.value);
    setSS(event.target.value);
  }

  function handleSP(event) {
    // console.log(event.target.value);
    setSP(event.target.value);
  }

  async function handleAddShirt(event) {
    event.preventDefault();
    if (!si || !ss || !sp) {
      alert("Field cant be empty!");
    } else {
      try {
        let response = await axios({
          method: "post",
          url: "http://localhost:4000/addShirt",
          data: {
            shirtImage: si,
            shirtSize: ss,
            shirtPrice: sp,
          },
        });
        alert("New Shirt Added");
        console.log(response);
      } catch (err) {
        console.log(err);
        alert(`Error check log! \n`, err);
      }
    }
  }

  return (
    <div>
      <Link
        to={`/adminDashboard/${userName}/inventory`}
        className="btn btn-primary"
      >
        Inventory
      </Link>
      <form>
        shirt image:
        <input value={si} onChange={handleSI}></input>
        <br></br>
        shirt size:
        <input value={ss} onChange={handleSS}></input>
        <br></br>
        shirt price:
        <input value={sp} onChange={handleSP}></input>
        <br></br>
        <button onClick={handleAddShirt}>Add</button>
      </form>
    </div>
  );
};

export default AddInventoryPage;
