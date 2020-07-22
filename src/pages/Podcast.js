/* eslint-disable complexity */
import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import ReactPlayer from "react-player"

import Container from "@/components/Container";
import styled from "styled-components";

import api from "@api";
import SVG from "@/components/SVG";
import PodcastCard from "@/features/podcast/components/PodcastCard";

export const Podcast = ({ className, match }) => {
	const [podcasts, setPodcasts] = useState([]);
	const [podcast, setPodcast] = useState({})

	const fetchPodcast = async () => {
		const { id } = match.params;
		const result = await api.podcast.get(id);
		setPodcast(result)
	};

	const fetchPodcasts = async () => {
		const episodes = await api.podcast.getAll();
		setPodcasts(episodes)
	};

	useEffect(() => {
		if (!podcast.id || !podcasts.length) {
			fetchPodcast();
			fetchPodcasts();
		}
	});

	return (
		<div className={className}>
			<div className="teste5">
				<Container className="teste1">
					<div className="teste2">
						<div>
							<h1 className="titulo">{podcast.title}</h1>
							<p>{podcast.description}</p>
						</div>

						<div>
							<h4> Biografia: </h4>
							<div className="biografia">
								<div className="imagem" style={{ backgroundImage: `url(${podcast.photo})` }} />
								<div className="dados">
									<div>
										<span className="bio-title">Nome: </span>
										<span>Oscar Sales Bueno Filho</span>
									</div>
									<div>
										<span className="bio-title">Conhecido por: </span>
										<span>Dicá</span>
									</div>
									<div>
										<span className="bio-title">Descrição: </span>
										<span>Ex-jogador e maior ídolo da Ponte Preta</span>
									</div>
								</div>
							</div>

						</div>

						<div className="socialContainer">
							<h4> Disponível também em: </h4>
							<div className="social">
								<a target="_blank" rel="noopener noreferrer" href={podcast.spotifyUrl}>
									<SVG name="spotify" width="50" fill="#fff" />
								</a>
								<SVG name="deezer" width="50" fill="#fff" />
								<a target="_blank" rel="noopener noreferrer" href={podcast.youtubeUrl}>
									<SVG name="youtube" width="50" fill="#fff" />
								</a>
								<SVG name="instagram" width="50" fill="#fff" />
								<SVG name="twitter" width="50" fill="#fff" />
							</div>
						</div>

					</div>
					<div className="teste3">
						<ReactPlayer
							url={podcast.youtubeUrl}
						/>
					</div>
				</Container>
			</div>

			<Container className="mycontainer">
				<h2 className="vejatambem">Veja também</h2>
				<div className="teste4">
					{podcasts.slice(0, 4).map(p => <PodcastCard key={p.id} podcast={p} />)}
				</div>
			</Container>
		</div>
	);
};

Podcast.propTypes = {
	className: PropTypes.string,
	match: PropTypes.object
};

export default styled(Podcast)`
	& .teste5 {
		background-color: #000;
		color: #fff;

		padding: 50px 0;
	}

	& .vejatambem {
		padding-bottom: 20px;
	}

	& .mycontainer {
		padding: 50px 0;
	}

	& .teste4 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	& .teste1 {
		display: flex;
		padding: 0;


		& .teste3 {
			width: 640px;
			display: flex;
			align-items: center;
		}

		& .teste2 {
			padding-right: 50px;

			& > * {
				margin-bottom: 50px;
			}

			& .titulo {
				margin: 0; 
				font-size: 42px;
			}

			& p {
				margin: 10px 0 0;
				font-size: 20px;
				line-height: 1.3em;
			}

			& .imagem {
				width: 75px;
				height: 75px;
				border-radius: 50px;
				background-position: center;
				background-size: cover;
			}

			& .biografia {
				display: flex;
				align-items: center;

				& .dados {
					margin-left: 20px;
				}

				& .bio-title {
					font-weight: bold;
				}
			}

			& .socialContainer {
				margin-bottom: 0;
				
				& .social > * {
					margin-right: 20px;
				}
			} 
		}

	}
`;
