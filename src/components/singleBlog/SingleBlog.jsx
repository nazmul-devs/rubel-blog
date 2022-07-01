import BlogDecs from "../BlogDesc/BlogDecs";
import SideBar from "../sideBar/SideBar";
import "./singleBlog.css";

const SingleBlog = () => {
	return (
		<div className="singleBlog">
			<BlogDecs />
			<SideBar />
		</div>
	);
};

export default SingleBlog;
