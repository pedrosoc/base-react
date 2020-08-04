import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import api from "@api";
import i18n from "@i18n";

import Section from "@/components/Section";
import PodcastList from "@/features/podcast/components/PodcastList";

import HomeBanner from "@/features/me/components/HomeBanner";

import { isEmpty } from "@/utils/list";

const Home = ({ className }) => {
	const [podcasts, setPodcasts] = useState([]);

	const fetchaPodcasts = async () => {
		const episodes = await api.podcast.data.getAll();
		setPodcasts(episodes)
	};

	useEffect(() => {
		if (isEmpty(podcasts))
			fetchaPodcasts();
	}, [podcasts]);

	return (
		<Fragment>
			<Section first colored="#000">
				<HomeBanner />
			</Section>

			<Section>
				<PodcastList
					title={i18n.t("podcasts.lastEpisodes")}
					podcasts={podcasts.slice(0, 3)}
				/>
			</Section>
		</Fragment>
	);
};

Home.propTypes = {
	className: PropTypes.string
};

export default Home;
