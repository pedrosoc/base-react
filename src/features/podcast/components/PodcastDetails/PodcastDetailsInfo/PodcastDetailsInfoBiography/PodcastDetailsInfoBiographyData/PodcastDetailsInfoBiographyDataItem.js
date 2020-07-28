import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const PodcastDetailsInfoBiographyDataItem = ({ className, name, value }) => {
	return (
		<div className={className}>
			<b>{name}</b>
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
	margin-bottom: 5px;

	& h4 {
        margin-right: 10px;
    } 
`;
