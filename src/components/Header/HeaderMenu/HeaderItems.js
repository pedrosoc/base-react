import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import i18n from "@i18n";
import postTypes from "@/constants/postTypes";
import styles from "@/constants/styles";

const HeaderItems = ({ className }) => {
	const types = Object.values(postTypes) || [];

	return (
		<div className={className}>
			<NavLink to="/"> { i18n.t("home.title") } </NavLink>
			{types.map(t => <NavLink key={t} to={`/feed?type=${t}`}> { i18n.t(`${t}.title`) } </NavLink>)}
			<NavLink to="/about"> { i18n.t("about.title") } </NavLink>
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
	
	& a {
		text-decoration: none;
		color: #000;
		margin-bottom: 15px;
	}

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
		flex-direction: row;
		border-right: 2px solid #000;
		min-width: 350px;

		margin: 0;
		padding-top: 0;

		& a {
			margin-bottom: 0;
			margin-right: 30px;
			height: fit-content;
		}
	}
`;
