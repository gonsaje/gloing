import React from "react";
import "../../styles/components/_carousel.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Button, Input } from "@mui/material";
import BannerImage from "./bannerphoto.png";
import BannerImage2 from "./gloing-banner2.png";
import { isMobile, isTablet } from "react-device-detect";

const Carousel = () => {
	let bannerImg = isMobile ? BannerImage2 : BannerImage;
	if (isTablet) bannerImg = BannerImage;
	return (
		<div className="cmp-carousel--container">
			<Splide aria-label="My Favorite Images">
				<SplideSlide>
					<a href="/kakao-open-chat" target="_blank">
						<img src={bannerImg} alt="Image 1" />
					</a>
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Carousel;
