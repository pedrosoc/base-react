import React, { Fragment, useState, useEffect } from "react";

import PropTypes from "prop-types";

import api from "@api";
import i18n from "@i18n";
import Section from "@/components/Section";

import PodcastDetails from "@/features/podcast/components/PodcastDetails";
import PodcastList from "@/features/podcast/components/PodcastList";

const Podcast = ({ match }) => {
	const [podcasts, setPodcasts] = useState([]);

	const fetchPodcasts = async () => {
		const episodes = await api.podcast.data.getAll();
		setPodcasts(episodes)
	};

	useEffect(() => {
		if (!podcasts.length) {
			fetchPodcasts();
		}
	});

	const { id } = match.params;

	return (
		<Fragment>
			<Section first colored="#000">
				<PodcastDetails id={id} />
			</Section>

			<Section>
				<PodcastList
					title={i18n.t("podcast.seeAlso")}
					podcasts={podcasts.slice(0, 3)}
				/>
			</Section>
		</Fragment>
	);
};

Podcast.propTypes = {
	match: PropTypes.object
};

export default Podcast;
