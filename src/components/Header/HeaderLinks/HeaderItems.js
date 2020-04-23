import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import i18n from "@i18n";
import postTypes from "@/constants/postTypes";

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
    justify-content: space-between;
    min-width: 300px;

    height: fit-content;
    margin-right: 30px;
    padding-right: 30px;
    border-right: 2px solid #000;

    & a {
		text-decoration: none;
		color: #000;
	}
`;
