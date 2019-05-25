import React from "react";
import PropTypes from "prop-types";

import i18n from "i18n";

export const PostsDetails = ({ match }) => {
	const { id } = match.params;
	
	return (
		<h4> { i18n.t("post.details", { id }) } </h4>
	)
};

PostsDetails.propTypes = {
	match: PropTypes.object
};

export default PostsDetails;
