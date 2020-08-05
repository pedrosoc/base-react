import React, { Fragment, useState, useEffect } from "react";

import PropTypes from "prop-types";

import api from "@api";
import i18n from "@i18n";
import Section from "@/components/Section";

import PodcastDetails from "@/features/podcast/components/PodcastDetails";
import PodcastList from "@/features/podcast/components/PodcastList";

const Podcast = ({ match }) => {
	const { id } = match.params;
	const [podcastId, setPodcastId] = useState(null)
	const [podcasts, setPodcasts] = useState([]);

	useEffect(() => {
		const fetchPodcasts = async () => {
			const episodes = await api.podcast.data.getSomeDifferent(id, 3);
			setPodcasts(episodes)
		};

		if (id !== podcastId) {
			setPodcastId(id)
			fetchPodcasts();
		}
	}, [id, podcastId, podcasts]);

	return (
		<Fragment>
			<Section first colored="#000">
				<PodcastDetails id={id} />
			</Section>

			<Section>
				<PodcastList
					title={i18n.t("podcast.seeAlso")}
					podcasts={podcasts}
				/>
			</Section>
		</Fragment>
	);
};

Podcast.propTypes = {
	match: PropTypes.object
};

export default Podcast;
