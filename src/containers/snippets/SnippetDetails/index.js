import React from "react";
import PropTypes from "prop-types";

import i18n from "@i18n";

export const SnippetsDetails = ({ match }) => {
	const { id } = match.params;
	
	return (
		<h4>  { i18n.t("snippet.details", { id }) } </h4>
	)
};

SnippetsDetails.propTypes = {
	match: PropTypes.object
};

export default SnippetsDetails;
