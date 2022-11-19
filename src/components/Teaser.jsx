import "../styles/components/_teaser.scss";
import { Link } from "react-router-dom";
const Teaser = ({ image, info }) => {
	return (
		<div className="cmp-teaser--container">
			<Link to="/kakao-open-chat">
				<div className="cmp-teaser--wrapper">
					<div className="cmp-teaser--top-section">
						<img src={image} alt="teaser" />
					</div>
					<div className="cmp-teaser--bottom-section">
						<div class="cmp-teaser--desc">{info.description}</div>
						<div>
							<div>{info.price}</div>
							<div>
								<i>{info.perunit}</i>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Teaser;
