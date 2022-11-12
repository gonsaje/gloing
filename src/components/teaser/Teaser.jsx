import "../../styles/components/_teaser.scss";
import defaultImage from "./default.webp";
import { Link } from "react-router-dom";
const Teaser = () => {
	return (
		<div className="cmp-teaser--container">
			<Link to="/kakao-open-chat">
				<div className="cmp-teaser--wrapper">
					<div className="cmp-teaser--top-section">
						<img src={defaultImage} />
					</div>
					<div className="cmp-teaser--bottom-section">LowerHalf</div>
				</div>
			</Link>
		</div>
	);
};

export default Teaser;
