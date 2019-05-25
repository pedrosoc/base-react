import React from "react";

import i18n from "@i18n";

import { NavLink } from "react-router-dom";

export const SnippetsList = () => {
	return (
		<div>
			<h4> { i18n.t("snippet.title") } </h4>
			
			<NavLink to="/snippets/1"> { i18n.t("snippet.item", { id: 1 }) } </NavLink>
			<NavLink to="/snippets/2"> { i18n.t("snippet.item", { id: 2 }) } </NavLink>
			<NavLink to="/snippets/3"> { i18n.t("snippet.item", { id: 3 }) } </NavLink>
			<NavLink to="/snippets/4"> { i18n.t("snippet.item", { id: 4 }) } </NavLink>
		</div>
	)
};

export default SnippetsList;
