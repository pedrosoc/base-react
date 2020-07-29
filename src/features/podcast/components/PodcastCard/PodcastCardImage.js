import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const PodcastCardImage = ({ className, src, spotlight }) => {
	return (
		<img className={className} src={src} alt={"teste"} width={"100%"} />
	);
}

PodcastCardImage.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	spotlight: PropTypes.bool
};

export default styled(PodcastCardImage)`
    border-radius:  5px 5px 0 0;
`;
