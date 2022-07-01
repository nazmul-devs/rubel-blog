import "./write.css";

const Write = () => {
	return (
		<div className="write">
			<img
				src="https://xoxobella.com/wp-content/uploads/2020/08/instagram_captions_for_nature_photos-2.jpg"
				alt=""
				className="writeImg "
			/>
			<form action="" className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="imgAddIcon far fa-image"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						name=""
						id=""
						cols="30"
						placeholder="Write your story..."
						className="writeInput writeText"
						type="text"
					></textarea>
				</div>
				<button type="submit" className="writeSubmit">
					Publish
				</button>
			</form>
		</div>
	);
};

export default Write;
