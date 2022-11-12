import "../styles/pages/_kakaoopenchat.scss";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const KakaoOpenChatPage = () => {
	return (
		<>
			{/* <Helmet>
				<title>gloing | KakaoTalk OpenChat</title>
			</Helmet> */}
			<Layout pageName="KakaoTalk OpenChat">
				<div className="cmp-kakao--container">
					<iframe
						className="cmp-kakao--openchat"
						src="https://open.kakao.com/o/gFTpYjxe"
						frameborder="0"
					></iframe>
				</div>
			</Layout>
		</>
	);
};

export default KakaoOpenChatPage;
