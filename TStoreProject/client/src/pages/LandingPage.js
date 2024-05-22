import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
      <h1>Hey welcome to TStore!</h1>
    </div>
  );
};

export default LandingPage;
