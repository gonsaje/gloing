import Carousel from "../components/carousel/Carousel";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { Helmet } from "react-helmet";

const LandingPage = () => {
	return (
		<>
			<Helmet>
				<title>gloing | Home</title>
			</Helmet>
			<div className="landing-page-container">
				<Carousel />
			</div>
		</>
	);
};

export default LandingPage;
