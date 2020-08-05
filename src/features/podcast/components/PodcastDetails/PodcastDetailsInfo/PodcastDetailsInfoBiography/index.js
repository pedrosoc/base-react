import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import PodcastDetailsInfoBiographyImage from "./PodcastDetailsInfoBiographyImage";
import PodcastDetailsInfoBiographyData from "./PodcastDetailsInfoBiographyData";

const PodcastDetailsInfo = ({ className, profile }) => {
	if (!profile) 
		return <div className={className} /> 

	return (
		<div className={className}>
			<h4> Biografia: </h4>

			<div className="biografia">
				<PodcastDetailsInfoBiographyImage url={profile.photo}/>
				<PodcastDetailsInfoBiographyData biography={profile.biography} />
			</div>

		</div>
	);
};

PodcastDetailsInfo.propTypes = {
	className: PropTypes.string,
	profile: PropTypes.object
};

export default styled(PodcastDetailsInfo)`
	margin: 40px 0;

	& > h4 {
        margin-bottom: 20px;
    } 

    & > div {
        display: flex;
        align-items: center;
    } 
`;
