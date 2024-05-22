import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AdminDashBoard = () => {
  const { userName } = useParams();
  const navigate = useNavigate();
  const [suc, setSuc] = useState();
  useEffect(() => {
    async function fetchProtectedData() {
      const token = localStorage.getItem("token");
      const response = await axios(
        `http://localhost:4000/adminDashboard/${userName}`,
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
  return (
    <div>
      <h1>{userName} Dashboard! </h1>
      <Link to={`/adminDashboard/${userName}/inventory`} className="btn btn-primary">
        Inventory
      </Link>
    </div>
  );
};

export default AdminDashBoard;
