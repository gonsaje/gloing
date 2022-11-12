import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import KakaoOpenChatPage from "./pages/KakaoOpenChatPage";
import LandingPage from "./pages/LandingPage";
import BrandsPage from "./pages/BrandsPage";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content">
				<BrowserRouter>
					<Routes>
						<Route path="/gloing" element={<LandingPage />} />
						<Route
							path="/gloing/kakao-open-chat"
							element={<KakaoOpenChatPage />}
						/>
						<Route path="/gloing/brands" element={<BrandsPage />} />
						<Route path="*" status={404} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}

export default App;
