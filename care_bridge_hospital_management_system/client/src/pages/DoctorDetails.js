import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  // console.clear();
  const { name } = useParams();
  const [appointments, setAppointments] = useState([]);
  // alert(name);

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const response = await axios.get(
          "http://localhost:4000/app/getALLDoctors"
        );
        // console.log("response.data");
        // console.log(response.data);
        setAppointments(response);
        // console.log("appointments");
        // console.log(appointments);
      } catch (error) {
        console.log("Error occurred", error);
      }
    }
    fetchDoctor();
  }, []);

  useEffect(() => {
    console.log("appointments");
    console.log(appointments.data);
  }, [appointments]);

  return (
    <div>
      {appointments.data && appointments.data.length > 0 ? (
        appointments.data.map((doctor, index) =>
          doctor.userName === name ? (
            <div key={index}>
              <h1>{doctor.userName}</h1>
              {doctor.appointmentDates.length > 0 ? (
                doctor.appointmentDates.map((dates) => (
                  <p key={dates}>Dates: {dates}</p>
                ))
              ) : (
                <p>No Appointment Found</p>
              )}
            </div>
          ) : null
        )
      ) : (
        <p>Error Fetching Data</p>
      )}
    </div>
  );
};

export default DoctorDetails;
