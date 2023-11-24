import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Login = () => {
  const { isLoggedIn, loginUser } = useContext(AuthContext);
  const handleLogin = () => {
    const currUser = {
      id: 0,
      username: "Sab ",
      profilePic:
        "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
    loginUser(currUser);
    console.log(isLoggedIn);
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>My Social Space</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            expedita, autem nulla nemo iusto eligendi recusandae dignissimos sed
            magni non ab modi iure quam dicta.
          </p>
          <span>Don't have an account? </span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
