import "../../styles/components/_teaser.scss";
import defaultImage from "./shirts2.png";
import { Link } from "react-router-dom";
const Teaser = (props) => {
	return (
		<div className="cmp-teaser--container">
			<Link to="/kakao-open-chat">
				<div className="cmp-teaser--wrapper">
					<div className="cmp-teaser--top-section">
						<img src={defaultImage} alt="teaser" />
					</div>
					<div className="cmp-teaser--bottom-section">
						<div>
							<div>60%</div>
							<div>₩300,000원</div>
						</div>
						<div>
							<del>750,000원</del>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Teaser;
