import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import routes from "@/constants/routes";
import styles from "@/constants/styles";

import PodcastCardInfo from "./PodcastCardInfo";
import PodcastCardImage from "./PodcastCardImage";

const PodcastCard = ({ className, podcast, spotlight }) => {
	if (!podcast)
		return <Fragment />

	const url = routes.podcastDetails.urlFor(podcast.episode);

	return (
		<NavLink to={url} className={className}>
			<PodcastCardImage spotlight={spotlight} src={podcast.img} />
			<PodcastCardInfo title={podcast.title} episode={podcast.episode} description={podcast.description} />
		</NavLink>
	);
}

PodcastCard.propTypes = {
	className: PropTypes.string,
	podcast: PropTypes.object,
	spotlight: PropTypes.bool
};

export default styled(PodcastCard)`
	width: 100%;
    margin-bottom: 50px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    border-radius: 5px;
    font-size: 14px;
    text-decoration: none;

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
    	width: ${props => props.spotlight ? "49%" : "215px"};
	}

	@media only screen and (min-width: ${styles.breakpoint_large}) {
    	width: ${props => props.spotlight ? "49%" : "370px"};
	}
`;
