import React from "react";

import PropTypes from "prop-types";
import ReactPlayer from "react-player"

import { useMediaQuery } from "react-responsive";

import styled from "styled-components";
import styles from "@/constants/styles";

const PodcastDetailsPlayer = ({ className, url }) => {
	const isMobile = useMediaQuery({
		query: `(max-device-width: ${styles.breakpoint_small_max})`
	});

	return (
		<div className={className}>
			<ReactPlayer
				controls
				height={isMobile ? "60vw": "360px"}
				width="100%"
				url={url}
			/>
		</div>
	);
};

PodcastDetailsPlayer.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string
};

export default styled(PodcastDetailsPlayer)`
	width: 100%;

	@media only screen and (min-width: ${styles.breakpoint_large}) {
		width: 45%;
	}
`;
