import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  function handleUserName(event) {
    setUserName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin(event) {
    event.preventDefault();
    if (userName.length === 0 && password.length === 0) {
      alert("Useranme & password can't be empty!");
    } else {
      try {
        const isPresent = await axios({
          method: "get",
          url: "http://localhost:4000/userLogin",
          params: {
            userName: userName,
            password: password,
          },
        });
        console.log("isPresent \n");
        console.log(isPresent);
        if (isPresent.data) {
          const data = isPresent.data.token;
          localStorage.setItem("token", data);
          // alert("user exits!");
          // console.log(isPresent);
          // call getUserInfoAPI
          // if(getUserInfoAPI === true){}
          if (isPresent.data.role === "admin") {
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
              if (data === "Success") {
                navigate(`/adminDashboard/${userName}`);
              }
            }

            fetchProtectedData();
          } else {
            navigate(`/userDashBoard/${userName}`);
          }
        } else {
          alert("Invalid UserId or Password!");
        }
      } catch (err) {
        console.log("Some issue at backend! \n", err);
      }
    }
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
          url: "http://localhost:4000/userSignUp",
          data: {
            userName: userName,
            password: password,
          },
        });
        console.log(response);
        alert("New User Created! \n Please Login!");
      } catch (err) {
        console.log(err);
        alert(`${userName} present already!`, err);
      }
      // }
    }
  }

  return (
    <div>
      <form style={{ padding: "1%" }}>
        <Link to="/" className="btn btn-primary">
          &lt;- Home
        </Link>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            // type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userName}
            onChange={handleUserName}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <div style={{ display: "flex", gap: "1%" }}>
          <button
            type="submit"
            className="btn btn-primary"
            name="login"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            name="signup"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
