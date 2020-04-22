import React from "react";
import i18n from "@i18n";

import PropTypes from "prop-types";

import Container from "@/components/Container";

import containerTypes from "@/constants/containerTypes";

export const Post = ({ match }) => {
	const { id } = match.params;
	
	return (
		<Container type={containerTypes.text}>
			<h4>  { i18n.t("snippet.details", { id }) } </h4>
		</Container>
	)
};

Post.propTypes = {
	match: PropTypes.object
};

export default Post;
