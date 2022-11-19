import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import "../styles/components/_layout.scss";
const Layout = (props) => {
	return (
		<>
			<Helmet>
				<title>gloing | {props.pageName}</title>
			</Helmet>
			<Header />
			<div className="content">{props.children}</div>
			<Footer />
		</>
	);
};

export default Layout;
