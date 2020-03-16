import React from "react";
import i18n from "@i18n";

import { NavLink } from "react-router-dom";

import { postTypes } from "../constants/postTypes";

export const Header = () => {
	const types = Object.values(postTypes) || [];

	return (
		<div>
			<NavLink to="/"> { i18n.t("home.title") } </NavLink>

			{types.map(t => <NavLink key={t} to={`/feed?type=${t}`}> { i18n.t(`${t}.title`) } </NavLink>)}

			<NavLink to="/about"> { i18n.t("about.title") } </NavLink>
		</div>
	);
};

export default Header;
