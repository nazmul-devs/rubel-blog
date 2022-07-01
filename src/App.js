import SingleBlog from "./components/singleBlog/SingleBlog";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";
import Write from "./pages/write/Write";

function App() {
	return (
		<div>
			<TopBar />
			<Setting />
		</div>
	);
}

export default App;
