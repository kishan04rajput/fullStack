import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    // <>
    <div>
      <h1 style={{"textAlign":"center"}}>Welcome to Carebridge Hospital</h1>
      <div
        class="d-flex justify-content-center align-items-center"
        style={{ "height": "90vh" }}
      >
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to="/admin" className="btn btn-primary">
            Admin
          </Link>
          <Link to="/doctor" className="btn btn-primary">
            Doctor
          </Link>
          <Link to="/patient" className="btn btn-primary">
            Patient
          </Link>
        </div>
      </div>
    </div>
    // <Outlet />
    // </>
  );
};

export default LandingPage;
