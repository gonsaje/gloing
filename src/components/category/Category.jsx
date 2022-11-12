import "../../styles/components/_category.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = ({ image, label, path }) => {
	const [link, setLink] = useState("/");
	useEffect(() => {
		setLink(path);
	}, [path]);
	return (
		<>
			<div className="cmp-category--container">
				<Link to={"/item"}>
					<div className="cmp-category--icon">
						<img src={image} />
					</div>
					<div className="cmp-category--label">{label}</div>
				</Link>
			</div>
		</>
	);
};

export default Category;
