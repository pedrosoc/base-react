import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const PodcastCardImage = ({ className, src, spotlight }) => {
	return (
		<div className={className} style={{ backgroundImage: `url(${src}` }} />
	);
}

PodcastCardImage.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	spotlight: PropTypes.bool
};

export default styled(PodcastCardImage)`
    width: 100%;
    height: ${props => props.spotlight ? "496px" : "100px"};
    background-color: #000;
    border-radius:  5px 5px 05px 5px 0 0;
    background-position: center;
    background-size: cover;
`;
