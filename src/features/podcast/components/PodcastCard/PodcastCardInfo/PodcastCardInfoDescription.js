import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const PodcastCardInfoDescription = ({ className, description }) => {
	return (
		<p className={className}>{description}</p>
	);
}

PodcastCardInfoDescription.propTypes = {
	className: PropTypes.string,
	description: PropTypes.string
};

export default styled(PodcastCardInfoDescription)`
    font-size: 16px;
    margin-bottom: 0;
    color: rgba(0, 0, 0, .68);

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;
