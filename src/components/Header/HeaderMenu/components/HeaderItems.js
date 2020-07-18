import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "@/constants/styles";
import routes from "@/constants/routes";

import HeaderItem from "./HeaderItem";

const HeaderItems = ({ className }) => {
	return (
		<div className={className}>
			<HeaderItem to={routes.home.url} title={routes.home.title} />
			<HeaderItem to={routes.podcasts.url} title={routes.podcasts.title} />
			<HeaderItem to={routes.about.url} title={routes.about.title} />
		</div>
	);
};

HeaderItems.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderItems)`
	display: flex;
	flex-direction: column;
    margin: 0 ${styles.container_margin_medium};
	padding-top: ${styles.container_margin_medium};

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
		flex-direction: row;
		border-right: 2px solid #000;

		margin: 0;
		padding-top: 0;
	}
`;
