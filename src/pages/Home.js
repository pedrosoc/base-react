import React, { useState, useEffect, Fragment } from "react";

import i18n from "@i18n";
import api from "@api";
import styled from "styled-components";
import PropTypes from "prop-types";

import PodcastCard from "@/features/podcast/components/PodcastCard";
import Container from "@/components/Container";

import Banner from "@/assets/images/macacast_macaco.png";

export const Home = ({ className }) => {
	const [podcasts, setPodcasts] = useState([]);

	const fetchaPodcasts = async () => {
		const episodes = await api.podcast.getAll();
		setPodcasts(episodes)
	};

	useEffect(() => {
		if (!podcasts.length)
			fetchaPodcasts();
	}, [podcasts]);

	return (
		<div className={className}>
			<div className="teste3">
				<Container className="teste">
					<div className="teste2">
						<h2>MACACAST</h2>
						<p>O PODCAST DA MAIOR DO INTEIOR</p>
					</div>
					<img alt="Macacast" src={Banner} />
				</Container>
			</div>
			<Container className="teste4">
				{podcasts.map(p => <PodcastCard key={p.id} podcast={p} />)}
			</Container>
		</div>
	);
};

Home.propTypes = {
	className: PropTypes.string
};

export default styled(Home)`

	& > .teste3 {
		background-color: #000;
		padding: 100px 0;
	}

	& > .teste4 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 100px 0;
	}

	& .teste {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;

		& img {
			max-width: 35%;
		}

		& .teste2 {
			color: #fff;

			& h2 {
				font-size: 90px;
				margin: 0;
			}

			& p {
				margin: 0;
			}
		}
	}
`;
