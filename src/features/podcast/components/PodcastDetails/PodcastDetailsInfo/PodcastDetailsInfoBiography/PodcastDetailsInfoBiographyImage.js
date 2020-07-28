import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const PodcastDetailsInfo = ({ className, url }) => {
	return (
		<div className={className} style={{ backgroundImage: `url(${url})` }} />
	);
};

PodcastDetailsInfo.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string
};

export default styled(PodcastDetailsInfo)`
    width: 75px;
    min-width: 75px;
    height: 75px;
    border-radius: 50px;
    background-position: center;
    background-size: cover;
`;
