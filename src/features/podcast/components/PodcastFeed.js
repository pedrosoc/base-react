import React, { useState, useEffect, Fragment } from "react";

import PropTypes from "prop-types";

import api from "@api";
import styled from "styled-components";
import PodcastCard from "./PodcastCard";
import i18n from "@i18n";

const Feed = ({ className }) => {
	const [podcasts, setPodcasts] = useState([]);

	const fetchaPodcasts = async () => {
		const episodes = await api.podcast.getAll();
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
			<h4> { i18n.t("podcasts.lastEpisodes") } </h4>
			<div className={className}>
				<PodcastCard spotlight podcast={first} />
				<PodcastCard spotlight podcast={second} />
			</div>
			
			<h4> { i18n.t("podcasts.anotherEpisodes") } </h4>
			<div className={className}>
				{otherEpisodes.map(p => <PodcastCard key={p.id} podcast={p} />)}
			</div>
		</Fragment>
	);
}

Feed.propTypes = {
	className: PropTypes.string
};

export default styled(Feed)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
