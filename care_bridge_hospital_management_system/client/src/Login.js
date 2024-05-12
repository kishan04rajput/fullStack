import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import AdminDashBoard from "./pages/AdminDashboard";
// import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashboard";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [apiURL, setApiURL] = useState("");
  const [location, setLocation] = useState(useLocation());
  // const history = useHistory(); // Initialize useHistory hook
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;

    // Split the pathname by '/' and get the last part
    const lastSegment = pathName.substring(pathName.lastIndexOf("/") + 1);

    if (lastSegment === "admin") {
      setApiURL("http://localhost:4000/app/createAdmin");
    } else if (lastSegment === "doctor") {
      setApiURL("http://localhost:4000/app/createDoctor");
    } else if (lastSegment === "patient") {
      setApiURL("http://localhost:4000/app/createPatient");
    } else {
      setApiURL("http://localhost:4000/app/createUser");
    }
  }, []);

  function handleUserName(event) {
    setUserName(event.target.value);
    // console.clear();
    // console.log(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSignup(event) {
    event.preventDefault();
    // console.clear();
    if (userName.length === 0 && password.length === 0) {
      alert("Useranme & password can't be empty!");
    } else {
      // if (isPresent.data.length > 0) {
      try {
        let response = await axios({
          method: "post",
          url: apiURL,
          data: {
            userName: userName,
            password: password,
          },
        });
        console.debug(response);
        alert("New User Created! \n Please Login!");
      } catch (err) {
        console.debug(err);
        alert("Error Check Log!", err);
      }
      // }
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    if (userName.length === 0 && password.length === 0) {
      alert("Useranme & password can't be empty!");
    } else {
      try {
        const isPresent = await axios({
          method: "get",
          url: "http://localhost:4000/app/getAdmin",
          params: {
            userName: userName,
            password: password,
          },
        });
        console.log(isPresent.data);
        if (isPresent.data.length > 0) {
          // alert("user exits!");
          navigate("/adminDashboard");
        }else{
          alert("Invalid UserId or Password!");
        }
      } catch (err) {
        console.log("Some issue at backend!", err);
      }
    }
  }

  return (
    <form style={{ padding: "1%" }}>
      <Link to="/" class="btn btn-primary">
        {" "}
        &lt;- Home{" "}
      </Link>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          // type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={userName}
          onChange={handleUserName}
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          onChange={handlePassword}
          value={password}
        />
      </div>
      <div style={{ display: "flex", gap: "1%" }}>
        <button
          type="submit"
          class="btn btn-primary"
          name="login"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          name="signup"
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </form>
  );
};

export default Login;
