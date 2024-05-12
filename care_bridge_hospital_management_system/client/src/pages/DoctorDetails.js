import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const { name } = useParams();
  const [appointments, setAppointments] = useState([]);
  // alert(name);

  useEffect(() => {
    async function fetchDoctor() {
      try {
        setAppointments(
          await axios.get("http://localhost:4000/app/getALLDoctors")
        );
      } catch (error) {
        console.log("Error occured", error);
      }
    }
    fetchDoctor();
  }, []);

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  return (
    <div>
      Doctor Name: {name} <br />
      Appointments: {appointments[0].data}
    </div>
  );
};

export default DoctorDetails;
