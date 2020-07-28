import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import styles from "@/constants/styles";

import PodcastDetailsInfoTitle from "./PodcastDetailsInfoTitle";
import PodcastDetailsInfoBiography from "./PodcastDetailsInfoBiography";
import PodcastDetailsInfoSocial from "./PodcastDetailsInfoSocial";

const PodcastDetailsInfo = ({ className, podcast }) => {
	return (
		<div className={className}>
			<PodcastDetailsInfoTitle title={podcast.title} description={podcast.description} />
			<PodcastDetailsInfoBiography profile={podcast.profile} />
			<PodcastDetailsInfoSocial key={podcast.id} socialList={podcast.social} />
		</div>
	);
};

PodcastDetailsInfo.propTypes = {
	className: PropTypes.string,
	podcast: PropTypes.object
};

export default styled(PodcastDetailsInfo)`
	width: 100%;
	margin-bottom: ${styles.container_margin_medium};

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
		margin-bottom: ${styles.container_margin_large};
	}

	@media only screen and (min-width: ${styles.breakpoint_large}) {
		width: 50%;
	}
`;
