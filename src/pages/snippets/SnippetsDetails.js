import React from "react";

import PropTypes from "prop-types";

export const SnippetsDetails = ({ match }) => {
	const { id } = match.params;
	
	return (
		<h4>{`Snippet Details ${id}`}</h4>
	)
};

SnippetsDetails.propTypes = {
	match: PropTypes.object
};

export default SnippetsDetails;
