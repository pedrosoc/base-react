import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const PodcastCard = ({ className, podcast }) => {
	if (!podcast)
		return <Fragment />

	return (
		<NavLink to={`/podcasts/${podcast.id}`} className={className}>
			<div className="image" style={{ backgroundImage: `url(${podcast.img}` }}>
			</div>
			<div className="text">
				<div className="header">
					<h3>{podcast.title}</h3>
					<span> Macacast #{podcast.id} </span>
				</div>
				<p>{podcast.description}</p>
			</div>
		</NavLink>
	);
}

PodcastCard.propTypes = {
	className: PropTypes.string,
	podcast: PropTypes.object
};

export default styled(PodcastCard)`
    width: 49%;
    margin-bottom: 50px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    border-radius: 5px;

    font-size: 14px;
    text-decoration: none;

    & .image {
        width: 100%;
        height: ${props => props.spotlight ? "496px" : "100px"};
        background-color: #000;
        border-radius:  5px 5px 05px 5px 0 0;
        background-position: center;
        background-size: cover;
    }

    & .text {
        padding: 20px;
        width: 100%;

        & .header {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            color: #000;

            & h3 {
                font-size: 18px;
                margin: 0;
            }

            & span {
                font-size: 16px;
                color: rgba(0,0,0,.4);
            }
        }

        & p {
            font-size: 16px;
            margin-bottom: 0;
            color: rgba(0,0,0,.68);
        }
    }
`;
