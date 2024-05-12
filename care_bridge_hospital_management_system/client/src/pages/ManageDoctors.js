import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/app/getALLDoctors"
        );
        setDoctors(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDoctors();
  }, []);

  // useEffect(()=>{
  //   console.log(doctors);
  // },[doctors]);

  return (
    <div
      style={{
        padding: "2%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        height: "100vh",
        // border: "1px solid red",
        gap: "2vh",
      }}
    >
      {/* in a table list all doctors <br/>
      doctorName || removeButton <br/>
      addADoctorButton <br/>
      while clicking on doc name, goto docName pages with all the upcoming appointments, back appointments, delete appointment button, add appointment button <br/> */}
      <div>
        <Link to="/adminDashboard" class="btn btn-primary">
          &lt;- Back
        </Link>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Delete</th>
        </tr>
        {doctors.map((item) => (
          <tr key={item.id}>
            {/* <td>{item.userName}</td> */}
            <td> <Link to={`/doctorDetails/${item.userName}`}>{item.userName}</Link> </td>
            <td>
              <button class="btn btn-primary">DELETE</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ManageDoctors;