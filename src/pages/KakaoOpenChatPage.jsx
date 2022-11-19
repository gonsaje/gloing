import "../styles/pages/_kakaoopenchat.scss";
import Layout from "../components/Layout";

const KakaoOpenChatPage = () => {
	return (
		<>
			<Layout pageName="KakaoTalk OpenChat">
				<div className="cmp-kakao--container">
					<div className="cmp-kakao--openchat">
						<iframe
							title="kakao-open-chat"
							src="https://open.kakao.com/o/gFTpYjxe"
							frameborder="0"
						></iframe>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default KakaoOpenChatPage;
