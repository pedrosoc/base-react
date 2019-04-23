import React from "react";

import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<div>
			<NavLink to="/"> Home </NavLink>
			<NavLink to="/posts"> Posts </NavLink>
			<NavLink to="/snippets"> Snippets </NavLink>
		</div>
	)
};

export default Header;
