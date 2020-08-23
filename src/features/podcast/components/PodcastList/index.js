import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { isEmpty } from "@/utils/list";

import PodcastListHeader from "./PodcastListHeader";
import PodcastListContent from "./PodcastListContent";

const PodcastList = ({ title, podcasts, showLink }) => {
	if (isEmpty(podcasts))
		return <Fragment />

	return (
		<Fragment>
			<PodcastListHeader title={title} showLink={showLink} />
			<PodcastListContent podcasts={podcasts} />
		</Fragment>
	);
}

PodcastList.propTypes = {
	title: PropTypes.string,
	podcasts: PropTypes.array,
	showLink: PropTypes.bool
};

export default PodcastList;
