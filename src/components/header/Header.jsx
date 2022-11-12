import { React, useEffect, useState, useCallback } from "react";
import "../../styles/components/_header.scss";

import { Button, Input, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Menu, Search, PersonOutline } from "@mui/icons-material";

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
				<div className="cmp-header--primary-container">
					<div className="cmp-header--primary-nav">
						<div className="cmp-header--logo-container">
							<Link to="/">
								<div className="cmp-header--logo"></div>
							</Link>
						</div>
						<div className="cmp-header--search">
							<input placeholder="Search" />
							<Button>
								<Search></Search>
							</Button>
						</div>
						<div className="cmp-header--toolbar">
							<div className="cmp-header--login-button">
								<Button>
									<PersonOutline></PersonOutline>
								</Button>
							</div>
							<div className="cmp-header--mobile-menu">
								<Button>
									<Menu></Menu>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="cmp-header--secondary-container">
					<div className="cmp-header--secondary-nav">
						<div>
							<Link to="/brands">전채 브랜드</Link>
						</div>
						<div>최저가</div>
						<div>인기 100</div>
						<div>공구모집</div>
						<div>
							<Link to="/about-us">About Us</Link>
						</div>
						<div>
							<Link to="/kakao-open-chat">Open Chat</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
