import "../../styles/components/_category.scss";

const Category = (props) => {
	return (
		<>
			<div className="cmp-category--container">
				<div className="cmp-category--icon"></div>
				<div className="cmp-category--label">{props.label}</div>
			</div>
		</>
	);
};

export default Category;
