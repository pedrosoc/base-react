import React, { Fragment, useState, useEffect } from "react";

import PropTypes from "prop-types";
import ReactPlayer from "react-player"

import styled from "styled-components";

import api from "@api";
import PodcastDetailsInfo from "./PodcastDetailsInfo";

export const Podcast = ({ className, id }) => {
	const [podcast, setPodcast] = useState({})

	const fetchPodcast = async () => {
		const result = await api.podcast.data.get(id);
		setPodcast(result)
	};

	useEffect(() => {
		if (!podcast.id) {
			fetchPodcast();
		}
	});

	if (!podcast.id)
		return <Fragment />

	return (
		<div className={className}>
			<PodcastDetailsInfo podcast={podcast} />
			<div className="teste3">
				<ReactPlayer
					url={podcast.player}
				/>
			</div>
		</div>
	);
};

Podcast.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string
};

export default styled(Podcast)`
	display: flex;
	color: #fff;

	& .teste3 {
		width: 640px;
		display: flex;
		align-items: center;
	}
`;
