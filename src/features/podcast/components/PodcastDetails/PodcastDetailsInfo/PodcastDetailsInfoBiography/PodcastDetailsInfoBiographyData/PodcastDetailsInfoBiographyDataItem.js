import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const PodcastDetailsInfoBiographyDataItem = ({ className, name, value }) => {
	return (
		<div className={className}>
			<h4>{name}</h4>
			<span>{value}</span>
		</div>
	);
};

PodcastDetailsInfoBiographyDataItem.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string
};

export default styled(PodcastDetailsInfoBiographyDataItem)`
	display: flex;
	margin-bottom: 5px;

	& h4 {
        margin-right: 10px;
    } 
`;
