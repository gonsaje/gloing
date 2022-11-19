import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
// Image Assets
import BlueShorts from "../dummyImages/blueshorts.png";
import Shirts from "../dummyImages/shirts.png";
import Shirts2 from "../dummyImages/shirts2.png";
import WhiteSweater from "../dummyImages/whitesweat.png";
import GreenTrain from "../dummyImages/greentrain.png";
import Green from "../dummyImages/green.png";
import OTC from "../dummyImages/otc.png";
import TShirt from "../dummyImages/whiteshirt.png";

const BrandsPage = () => {
	const sellers = dummySellers.map((seller, i) => {
		return (
			<div key={i}>
				<Teaser image={seller.image} info={seller.info} />
			</div>
		);
	});

	const seller2 = dummySellers2.map((seller, i) => {
		return (
			<div key={i}>
				<Teaser image={seller.image} info={seller.info} />
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
						<div className="seller-content">{seller2}</div>
					</div>
				</div>
				<div className="seller-container">
					<div className="seller-section">
						<div className="seller-header"></div>
						<div className="seller-content">{sellers}</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

const dummySellers = [
	{
		name: 1,
		image: Shirts2,
		info: {
			price: "60%할인가 2,900원 (최소 22pcs)",
			perunit: "원가 7,250",
			description: "코튼 베이지 SS T-Shirt",
		},
	},
	{
		name: 1,
		image: WhiteSweater,
		info: {
			price: "50%할인가 4,300원 (최소 8pcs)",
			perunit: "원가 8,600",
			description: "솔리드 테리 여성 맨투맨",
		},
	},
	{
		name: 1,
		image: OTC,
		info: {
			price: "70%할인가 3,300원 (최소 8pcs)",
			perunit: "원가 11,000",
			description: "뷰트 그래픽 여성 후디 Free Size",
		},
	},
	{
		name: 1,
		image: Green,
		info: {
			price: "80%할인가 1,600원 (최소 8pcs)",
			perunit: "원가 8,000",
			description: "팝컬러 폴리 SS 밀라노 T",
		},
	},
];

const dummySellers2 = [
	{
		name: 1,
		image: GreenTrain,
		info: {
			price: "60%할인가 2,900원 (최소 22pcs)",
			perunit: "원가 7,250",
			description: "코튼 베이지 SS T-Shirt",
		},
	},
	{
		name: 1,
		image: Shirts,
		info: {
			price: "50%할인가 4,300원 (최소 8pcs)",
			perunit: "원가 8,600",
			description: "솔리드 테리 여성 맨투맨",
		},
	},
	{
		name: 1,
		image: BlueShorts,
		info: {
			price: "70%할인가 3,300원 (최소 8pcs)",
			perunit: "원가 11,000",
			description: "뷰트 그래픽 여성 후디 Free Size",
		},
	},
	{
		name: 1,
		image: TShirt,
		info: {
			price: "80%할인가 1,600원 (최소 8pcs)",
			perunit: "원가 8,000",
			description: "팝컬러 폴리 SS 밀라노 T",
		},
	},
];

export default BrandsPage;
