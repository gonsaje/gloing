import { BrowserRouter, Route, Routes } from "react-router-dom";
import KakaoOpenChatPage from "./pages/KakaoOpenChatPage";
import LandingPage from "./pages/LandingPage";
import BrandsPage from "./pages/BrandsPage";
import ItemPage from "./pages/Item";
import AboutUs from "./pages/AboutUsPage";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="kakao-open-chat" element={<KakaoOpenChatPage />} />
					<Route path="brands" element={<BrandsPage />} />
					<Route path="item" element={<ItemPage />} />
					<Route path="about-us" element={<AboutUs />} />
					<Route path="*" status={404} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
