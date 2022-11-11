import React from "react";
import "../../styles/components/_carousel.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Button, Input } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BannerImage from "./bannerphoto.png";
import BannerImage2 from "./gloing-banner2.png";

const Carousel = () => {
	return (
		<div className="cmp-carousel--container">
			<Splide aria-label="My Favorite Images">
				<SplideSlide>
					<a href="/kakao-open-chat" target="_blank">
						<img src={BannerImage} alt="Image 1" />
					</a>
				</SplideSlide>
				<SplideSlide>
					<a href="/kakao-open-chat" target="_blank">
						<img src={BannerImage2} alt="Image 1" />
					</a>
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Carousel;
