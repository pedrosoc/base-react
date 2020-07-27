import React, { useState, useEffect, Fragment } from "react";

import PropTypes from "prop-types";

import api from "@api";
import i18n from "@i18n";

import PodcastFeedSpotight from "./PodcastFeedSpotight";
import PodcastList from "../PodcastList";

const PodcastFeed = () => {
	const [podcasts, setPodcasts] = useState([]);

	const fetchaPodcasts = async () => {
		const episodes = await api.podcast.data.getAll();
		setPodcasts(episodes)
	};

	useEffect(() => {
		if (!podcasts.length)
			fetchaPodcasts();
	}, [podcasts]);

	const [first, second, ...otherEpisodes] = podcasts;

	if (!first)
		return <Fragment />

	return (
		<Fragment>
			<PodcastFeedSpotight
				title={i18n.t("podcasts.lastEpisodes")}
				first={first}
				second={second}
			/>

			<PodcastList
				title={i18n.t("podcasts.anotherEpisodes")}
				podcasts={otherEpisodes}
			/>
		</Fragment>
	);
}

PodcastFeed.propTypes = {
	className: PropTypes.string
};

export default PodcastFeed;
