import React from "react";

import PropTypes from "prop-types";

export const PostsDetails = ({ match }) => {
	const { id } = match.params;
	
	return (
		<h4>{`Post Details ${id}`}</h4>
	)
};

PostsDetails.propTypes = {
	match: PropTypes.object
};

export default PostsDetails;
