import { React, useEffect, useState, useCallback } from "react";
import "../../styles/components/_footer.scss";

import { Button, Input } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const FooterLinks = [{}];

const Footer = () => {
	const secondaryButtonTheme = createTheme({
		typography: {
			// fontFamily: ['Montserrat', 'serif'].join(','), Uncomment if you want all the typography to inherit this font.
			button: {
				fontSize: 18,
				fontWeight: 400,
				color: "white",
			},
		},
	});

	const getContentHeight = () => {};
	return (
		<footer>
			<div className="cmp-footer--container">
				<div className="cmp-footer--top-section">
					<div className="cmp-footer--top-links">
						<div>About Us</div>
						<div>Terms of Service</div>
						<div>Privacy Policy</div>
					</div>
				</div>
				<div className="cmp-footer--bottom-section">
					<div></div>
					<div></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
