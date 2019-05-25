import React from "react";

import i18n from "@i18n";

import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<div>
			<NavLink to="/"> { i18n.t("home.title") } </NavLink>
			<NavLink to="/posts"> { i18n.t("post.title") } </NavLink>
			<NavLink to="/snippets"> { i18n.t("snippet.title") } </NavLink>
			<NavLink to="/about"> { i18n.t("about.title") } </NavLink>
		</div>
	);
};

export default Header;
