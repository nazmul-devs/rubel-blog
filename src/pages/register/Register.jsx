import "./register.css";

const Register = () => {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form action="" className="registerForm">
				<label htmlFor="">Username</label>
				<input type="text" placeholder="Write your username" />
				<label htmlFor="">Email</label>
				<input type="email" placeholder="Enter your email" />

				<label htmlFor="">Password</label>
				<input type="password" placeholder="Type your password" />
				<button type="submit">Register</button>
			</form>
			<button className="login-btn">Login</button>
		</div>
	);
};

export default Register;
