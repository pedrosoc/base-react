import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import PodcastCard from "./PodcastCard";

const PodcastList = ({ className, title, podcasts }) => {
	if (!podcasts.length)
		return <Fragment />

	return (
		<div className={className}>
			<h3>{title}</h3>
			<div>
				{podcasts.map(p => <PodcastCard key={p.id} podcast={p} />)}
			</div>
		</div>
	);
}

PodcastList.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	podcasts: PropTypes.array
};

export default styled(PodcastList)`
	& > h3 {
		margin-bottom: 30px;
	}

	& > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
