import { React, useEffect, useState, useCallback } from "react";
import "../../styles/components/_header.scss";

import { Button, Input } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const headerLinks = [{}];

const Header = () => {
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
		<header>
			<div className="cmp-header--container">
				<div className="cmp-header--primary-nav">
					<div className="cmp-header--logo-container">
						<a href="/">
							<div className="cmp-header--logo"></div>
						</a>
					</div>
					<div className="cmp-header--toolbar"></div>
				</div>
				<div className="cmp-header--secondary-nav">
					<div className="cmp-header--secondary-nav-left-container">
						<div className="cmp-header--secondary-nav-left">
							<Button
								sx={{ fontSize: 24, fontWeight: 600, color: "white" }}
								variant="text"
								href="/brands"
							>
								전채 브랜드
							</Button>
						</div>
						<div className="cmp-header--secondary-nav-left-shape"></div>
					</div>

					<div className="right">
						<ThemeProvider theme={secondaryButtonTheme}>
							<div>
								<Button variant="text">최저가</Button>
							</div>
							<div>
								<Button variant="text">인기 100</Button>
							</div>
							<div>
								<Button variant="text">공구모집</Button>
							</div>
							<div>
								<Button variant="text">About Us</Button>
							</div>
							<div>
								<Button href="/kakao-open-chat" variant="text">
									Open Chat
								</Button>
							</div>
						</ThemeProvider>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
