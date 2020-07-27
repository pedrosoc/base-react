import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const PodcastCardInfoHeader = ({ className, title, episode }) => {
	return (
		<div className={className}>
			<h3>{title}</h3>
			<span> Macacast #{episode} </span>
		</div>
	);
}

PodcastCardInfoHeader.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	episode: PropTypes.number
};

export default styled(PodcastCardInfoHeader)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    color: #000;

    & h3 {
        font-size: 18px;
        margin: 0;
    }

    & span {
        font-size: 16px;
        color: rgba(0,0,0,.4);
    }
`;
