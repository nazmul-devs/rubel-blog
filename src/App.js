import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBlog from "./components/singleBlog/SingleBlog";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Write from "./pages/write/Write";

function App() {
	return (
		<BrowserRouter>
			<TopBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/singleblog" element={<SingleBlog />}></Route>
				<Route path="/setting" element={<Setting />}></Route>
				<Route path="/write" element={<Write />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
