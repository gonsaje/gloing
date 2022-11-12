import Carousel from "../components/carousel/Carousel";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const LandingPage = () => {
	return (
		<>
			<Layout pageName="Home">
				<div className="landing-page-container">
					<Carousel />
				</div>
			</Layout>
		</>
	);
};

export default LandingPage;
