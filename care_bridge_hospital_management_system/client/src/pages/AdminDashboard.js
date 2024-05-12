import { Link } from "react-router-dom";

const AdminDashBoard = ()=>{
  return(
    <div>
      <div
        class="d-flex justify-content-center align-items-center"
        style={{ "height": "90vh" }}
      >
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to="/manageDoctors" className="btn btn-primary">
            Manage Doctor
          </Link>
          <Link to="/patient" className="btn btn-primary">
            Manage Patient
          </Link>
        </div>
      </div>
      {/* manage doctor -> doctor add, remove, appointment add, remove;
      manage patient -> patient (add, remove), appointment(add, remove); */}
    </div>
  );
};

export default AdminDashBoard;