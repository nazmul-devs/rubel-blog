import "./sidebar.css";

const SideBar = () => {
	return (
		<div className="sideBar">
			<div className="sidebarItems">
				<span className="sidebarTitle">about me</span>
				<img
					src="https://www.pinkvilla.com/imageresize/chris_future_thor.jpg?width=752&format=webp&t=pvorg"
					alt=""
					className="sidebarImg"
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem porro doloremque magni inventore nulla tempora
					ratione voluptatum facere autem, corporis modi dolorum
					necessitatibus fugit
				</p>
			</div>
			<div className="sidebarItems">
				<span className="sidebarTitle">categories</span>
				<ul className="sidebarLists">
					<li className="sidebaList">Life</li>
					<li className="sidebaList">Music</li>
					<li className="sidebaList">Style</li>
					<li className="sidebaList">Sports</li>
					<li className="sidebaList">Tech</li>
					<li className="sidebaList">Cinema</li>
				</ul>
			</div>
			<div className="sidebarItems">
				<span className="sidebarTitle">follow me</span>

				<ul className="sidebarSocial">
					<i class="sidebarIcon fab fa-instagram"></i>
					<i class="sidebarIcon fab fa-twitter"></i>
					<i class="sidebarIcon fab fas fa-paper-plane"></i>
					<i class="sidebarIcon fab fa-facebook-f"></i>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
