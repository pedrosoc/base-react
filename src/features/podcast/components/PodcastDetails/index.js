import React, { Fragment, useState, useEffect } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import api from "@api";
import styles from "@/constants/styles";

import PodcastDetailsInfo from "./PodcastDetailsInfo";
import PodcastDetailsPlayer from "./PodcastDetailsPlayer";

const Podcast = ({ className, id }) => {
	const [podcast, setPodcast] = useState({})

	const fetchPodcast = async () => {
		const result = await api.podcast.data.getByEpisode(id);
		setPodcast(result[0])
	};

	useEffect(() => {
		if (id !== podcast.episode) {
			fetchPodcast();
		}
	});

	if (!podcast.id)
		return <Fragment />

	return (
		<div className={className}>
			<PodcastDetailsInfo podcast={podcast} />
			<PodcastDetailsPlayer url={podcast.player} />
		</div>
	);
};

Podcast.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string
};

export default styled(Podcast)`
	display: flex;
	flex-direction: column;
	color: #fff;

	@media only screen and (min-width: ${styles.breakpoint_large}) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
