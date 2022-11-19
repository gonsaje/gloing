import Layout from "../components/Layout";
import Teaser from "../components/teaser/Teaser";
const dummySellers = [{ name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }];
const BrandsPage = () => {
	const sellers = dummySellers.map((seller, i) => {
		return (
			<div key={i}>
				<Teaser />
			</div>
		);
	});
	return (
		<>
			<Layout pageName="Brands">
				<div className="seller-container">
					<div className="seller-section">
						<div className="seller-header">
							<h1>상품 랭킹 Top 10</h1>
						</div>
						<div className="seller-content">{sellers}</div>
					</div>
				</div>
				<div className="seller-container">
					<div className="seller-section">
						<div className="seller-header">
							<h1>공구 셀러 모집중</h1>
							<h2>마감임박</h2>
						</div>
						<div className="seller-content">{sellers}</div>
					</div>
				</div>
				<div className="seller-container">
					<div className="seller-section">
						<div className="seller-header">
							<h1>공구 셀러 모집중</h1>
							<h2>마감임박</h2>
						</div>
						<div className="seller-content">{sellers}</div>
					</div>
				</div>
			</Layout>
		</>
	);
};
export default BrandsPage;
