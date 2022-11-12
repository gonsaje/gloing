import Carousel from "../components/carousel/Carousel";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Category from "../components/category/Category";
import "../styles/pages/_landingpage.scss";
import Ring1 from "./ring1.webp";
import Coat1 from "./coat1.jpeg";
import Pants1 from "./pants1.jpeg";
const dummmyCategories = [
	{ label: "아우터", image: Coat1 },
	{ label: "상의", image: Ring1 },
	{ label: "하의", image: Pants1 },
	{ label: "원피스", image: Ring1 },
	{ label: "트레이닝복", image: Pants1 },
	{ label: "홈웨어", image: Coat1 },
];

const LandingPage = () => {
	const categories = dummmyCategories.map((cat, i) => {
		return (
			<div key={i}>
				<Category label={cat.label} image={cat.image} />
			</div>
		);
	});
	return (
		<>
			<Layout pageName="Home">
				<div className="cmp-landingpage--container">
					<Carousel />
					<div className="cmp-landingpage--category-container">
						<h1 className="categories-header">인기 카테고리</h1>
						<div className="categories-content">{categories}</div>
					</div>
					<div className="seller-container">
						<div className="seller-section">
							<div className="seller-header">
								<h1>공구 셀러 모집중</h1>
								<h2>마감임박</h2>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default LandingPage;
