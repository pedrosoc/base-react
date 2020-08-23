import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import PodcastCard from "../PodcastCard";

import styles from "@/constants/styles";

const PodcastListContent = ({ className, podcasts }) => {
	return (
		<div className={className}>
			{podcasts.map(p => <PodcastCard key={p.id} podcast={p} />)}
		</div>
	);
}

PodcastListContent.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	podcasts: PropTypes.array
};

export default styled(PodcastListContent)`
	display: flex;
    flex-wrap: wrap;

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        & > a {
            margin-right: 13px;
        }
    }

    @media only screen and (min-width: ${styles.breakpoint_large}) {
        & > a {
            margin-right: 21px;
        }
    }

    & > a:nth-child(3n) {
        margin-right: 0;
    }
`;
