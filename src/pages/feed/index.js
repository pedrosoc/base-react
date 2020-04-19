import React from "react";

import PropTypes from "prop-types";

import FeedNews from "@/features/news/components/feed";
import FeedSnippets from "@/features/snippets/components/feed";

import { postTypes } from "@/constants/postTypes";
import { getLocationParam } from "@/utils/location";

export const Feed = ({ location }) => {
	const type = getLocationParam(location, "type");
	
	if (type === postTypes.news)
		return <FeedNews />

	return <FeedSnippets />
}


Feed.propTypes = {
	location: PropTypes.object
};

export default Feed;
