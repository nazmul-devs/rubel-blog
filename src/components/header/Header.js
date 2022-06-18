import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">This is title</span>
				<span className="headerTitleLg">Rubel Blogs</span>
			</div>
			<img
				src="https://www.itl.cat/pngfile/big/104-1040553_4k-pencil-desktop-wallpaper-hd-writing-table.jpg"
				alt=""
				className="haderImg"
			/>
		</div>
	);
};

export default Header;
