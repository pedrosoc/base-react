import React, { useState, useEffect, Fragment } from "react";

import PropTypes from "prop-types";

import api from "@api";
import i18n from "@i18n";

import PodcastFeedSpotight from "./PodcastFeedSpotight";
import PodcastList from "../PodcastList";

import { isEmpty } from "@/utils/list";

const PodcastFeed = () => {
	const [podcasts, setPodcasts] = useState([]);

	const fetchaPodcasts = async () => {
		const episodes = await api.podcast.data.getAll();
		setPodcasts(episodes)
	};

	useEffect(() => {
		if (isEmpty(podcasts)) {
			fetchaPodcasts();
		}
	}, [podcasts]);
	
	if (isEmpty(podcasts))
		return <Fragment />

	const [first, second, ...otherEpisodes] = podcasts;
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
