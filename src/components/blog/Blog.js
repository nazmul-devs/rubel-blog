import "./blog.css";

const Blog = () => {
	return (
		<div className="blog">
			<img
				src="https://xoxobella.com/wp-content/uploads/2020/08/instagram_captions_for_nature_photos-2.jpg"
				alt=""
				className="blogImg"
			/>
			<div className="blogInfo">
				<div className="blogCarts">
					<span className="blogCart">Music</span>
					<span className="blogCart">Life</span>
				</div>
				<h3 className="blogTitle">Lorem ipsum dolor sit amet.</h3>
				<hr />
				<span className="blogDate">1 hour ago</span>
			</div>
			<p className="blogDes">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
				omnis aspernatur at nobis a totam soluta molestiae consequatur amet
				nesciunt, sapiente doloremque nisi iusto optio in nihil dolore.
				Tempore, atque!
			</p>
		</div>
	);
};

export default Blog;
