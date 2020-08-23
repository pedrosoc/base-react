import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import PodcastCard from "../PodcastCard";

const PodcastFeedSpotight = ({ className, title, first, second }) => {
	if (!first)
		return <Fragment />

	return (
		<div className={className}>
			<h4>{title}</h4>
			<div>
				<PodcastCard spotlight podcast={first} />
				<PodcastCard spotlight podcast={second} />
			</div>
		</div>
	);
}

PodcastFeedSpotight.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	first: PropTypes.object,
	second: PropTypes.object
};

export default styled(PodcastFeedSpotight)`
	& > h4 {
		margin-bottom: 30px;
	}

	& > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
