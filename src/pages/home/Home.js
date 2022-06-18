import Blogs from "../../components/blogs/Blogs";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import "./home.css";

const Home = () => {
	return (
		<div>
			<Header />
			<div className="home">
				<Blogs />
				<SideBar />
			</div>
		</div>
	);
};

export default Home;
