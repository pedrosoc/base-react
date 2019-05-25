import React from "react";

import i18n from "i18n";

import { NavLink } from "react-router-dom";

export const PostsList = () => {
	return (
		<div>
			<h4> { i18n.t("post.title") } </h4>
			
			<NavLink to="/posts/1"> { i18n.t("post.item", { id: 1 }) } </NavLink>
			<NavLink to="/posts/2"> { i18n.t("post.item", { id: 2 }) } </NavLink>
			<NavLink to="/posts/3"> { i18n.t("post.item", { id: 3 }) } </NavLink>
			<NavLink to="/posts/4"> { i18n.t("post.item", { id: 4 }) } </NavLink>
		</div>
	)
};

export default PostsList;
