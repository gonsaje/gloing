import React from "react";
import "../styles/components/_carousel.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BannerImage from "../dummyImages/bannerphoto.png";
import BannerImage2 from "../dummyImages/gloing-banner2.png";
import DesktopBanner from "../dummyImages/kakaobanner-desktop.png";
import { isMobile, isTablet } from "react-device-detect";

const Carousel = () => {
	let bannerImg = isMobile ? BannerImage2 : DesktopBanner;
	if (isTablet) bannerImg = BannerImage;
	return (
		<div className="cmp-carousel--container">
			<Splide aria-label="My Favorite Images">
				<SplideSlide>
					<a href="/kakao-open-chat" target="_blank">
						<img src={bannerImg} alt="slide 1" />
					</a>
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Carousel;
