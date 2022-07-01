import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form action="" className="loginForm">
				<label htmlFor="">Email</label>
				<input type="email" placeholder="Enter your email" />
				<label htmlFor="">Password</label>
				<input type="password" placeholder="Type your password" />
				<button type="submit">Login</button>
			</form>
			<Link to="/register">
				<button className="register-btn">Register</button>
			</Link>
		</div>
	);
};

export default Login;
