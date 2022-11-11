import "../styles/pages/_kakaoopenchat.scss";
import { Helmet } from "react-helmet";

const KakaoOpenChatPage = () => {
	return (
		<>
			<Helmet>
				<title>gloing | KakaoTalk OpenChat</title>
			</Helmet>
			<div className="cmp-kakao--container">
				<iframe
					className="cmp-kakao--openchat"
					src="https://open.kakao.com/o/gFTpYjxe"
					frameborder="0"
				></iframe>
			</div>
		</>
	);
};

export default KakaoOpenChatPage;
