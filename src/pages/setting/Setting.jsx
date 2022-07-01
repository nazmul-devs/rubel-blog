import "./setting.css";
import Sidebar from "../../components/sideBar/SideBar";

const Setting = () => {
	return (
		<div className="setting">
			<div className="setting-container">
				<div className="settingTitle">
					<span className="updateTitle">Update Your Account</span>
					<span className="deleteTitle">Delete Account</span>
				</div>
				<form action="" className="settingForm">
					<label htmlFor="">Profile Picture</label>
					<div className="settingPP">
						<img
							src="https://www.pinkvilla.com/imageresize/chris_future_thor.jpg?width=752&format=webp&t=pvorg"
							alt=""
							className="PP"
						/>
						<label htmlFor="fileInput">
							<i className="settingPP-icon far fa-user-circle"></i>
						</label>
					</div>
					<input
						type="file"
						name=""
						id="fileInput"
						style={{ display: "none" }}
					/>
					<label htmlFor="">Username</label>
					<input type="text" placeholder="Username" />
					<label htmlFor="">Email</label>
					<input type="email" placeholder="User email" />
					<label htmlFor="">Password</label>
					<input type="password" />
					<button type="submit" className="settingSubmit">
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Setting;
