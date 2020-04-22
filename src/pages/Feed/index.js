import React from "react";

import PropTypes from "prop-types";

import Container from "@/components/Container";

import FeedNews from "@/features/news/components/Feed";
import FeedSnippets from "@/features/snippets/components/Feed";

import postTypes from "@/constants/postTypes";
import { getLocationParam } from "@/utils/location";

export const Feed = ({ location }) => {
	const type = getLocationParam(location, "type");
	
	if (type === postTypes.news)
		return (
			<Container>
				<FeedNews />
			</Container>
		);

	return (
		<Container>
			<FeedSnippets />
		</Container>
	);
}


Feed.propTypes = {
	location: PropTypes.object
};

export default Feed;
