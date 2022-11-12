import { React, useEffect, useState, useCallback } from "react";
import "../../styles/components/_header.scss";

import { Button, Input, TextField } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SegmentIcon from "@mui/icons-material/Segment";

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
								<SearchIcon></SearchIcon>
							</Button>
						</div>
						<div className="cmp-header--toolbar">
							<Button className="cmp-header--search-button">
								<PersonOutlineIcon></PersonOutlineIcon>
							</Button>
							<div className="cmp-header--mobile-menu">
								<Button>
									<SegmentIcon></SegmentIcon>
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
