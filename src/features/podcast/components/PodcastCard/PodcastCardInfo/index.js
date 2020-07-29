import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import PodcastCardInfoHeader from "./PodcastCardInfoHeader";
import PodcastCardInfoDescription from "./PodcastCardInfoDescription";

const PodcastCardInfo = ({ className, title, episode, description }) => {
	return (
		<div className={className}>
			<PodcastCardInfoHeader title={title} episode={episode} />
			<PodcastCardInfoDescription description={description} />
		</div>
	);
}

PodcastCardInfo.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	episode: PropTypes.number,
	description: PropTypes.string
};

export default styled(PodcastCardInfo)`
    padding: 20px;
    width: 100%;
`;
