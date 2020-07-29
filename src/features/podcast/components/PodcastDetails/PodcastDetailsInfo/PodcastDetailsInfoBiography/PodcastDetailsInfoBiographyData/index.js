import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import PodcastDetailsInfoBiographyDataItem from "./PodcastDetailsInfoBiographyDataItem";

const PodcastDetailsInfo = ({ className, biography }) => {
	return (
		<div className={className}>
			{
				biography.map(b => <PodcastDetailsInfoBiographyDataItem
					key={b.name}
					name={b.name}
					value={b.value}
				/>)
			}
		</div>
	);
};

PodcastDetailsInfo.propTypes = {
	className: PropTypes.string,
	biography: PropTypes.array
};

export default styled(PodcastDetailsInfo)`
    margin-left: 20px;
`;
