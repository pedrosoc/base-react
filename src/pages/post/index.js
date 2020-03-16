import React from "react";
import i18n from "@i18n";

import PropTypes from "prop-types";

export const Post = ({ match }) => {
	const { id } = match.params;
	
	return (
		<h4>  { i18n.t("snippet.details", { id }) } </h4>
	)
};

Post.propTypes = {
	match: PropTypes.object
};

export default Post;
