import SingleBlog from "./components/singleBlog/SingleBlog";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Write from "./pages/write/Write";

function App() {
	return (
		<div>
			<TopBar />
			<Register />
		</div>
	);
}

export default App;
