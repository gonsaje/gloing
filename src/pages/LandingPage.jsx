import Carousel from "../components/carousel/Carousel";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Category from "../components/category/Category";
import "../styles/pages/_landingpage.scss";

const dummmyCategories = [
	{ label: "아우터" },
	{ label: "상의" },
	{ label: "하의" },
	{ label: "원피스" },
	{ label: "트레이닝복" },
	{ label: "홈웨어" },
];

const LandingPage = () => {
	const categories = dummmyCategories.map((cat) => {
		return (
			<div>
				<Category label={cat.label} />
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
