import "./login.css";

const Login = () => {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form action="" className="loginForm">
				<label htmlFor="">Email</label>
				<input type="email" placeholder="Enter your email" />
				<label htmlFor="">Password</label>
				<input type="password" placeholder="Type your password" />
				<button type="submit" className="login-btn">
					Login
				</button>
			</form>
			<button className="register-btn">Register</button>
		</div>
	);
};

export default Login;
