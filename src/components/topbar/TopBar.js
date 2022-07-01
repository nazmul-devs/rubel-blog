import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
	return (
		<div className="top">
			<div className="topLeft">
				<ul>
					<li>
						<a href="">
							<i className="topbarIcon fab fa-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i className="topbarIcon fab fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i className="topbarIcon fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i className="topbarIcon fab fas fa-paper-plane"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="topCenter">
				<ul>
					<li>
						<Link to="/">
							<a href="">home</a>
						</Link>
					</li>
					<li>
						<a href="">blogs</a>
					</li>
					<li>
						<a href="">about me</a>
					</li>
					<li>
						<a href="">contac</a>
					</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					src="https://www.wallpaperflare.com/static/592/771/641/women-women-outdoors-redhead-long-hair-wallpaper.jpg"
					alt=""
					className="profile"
				/>
				<i className="searchBar fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
};

export default TopBar;
