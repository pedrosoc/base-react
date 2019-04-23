import React from "react";

import { NavLink } from "react-router-dom";

export const SnippetsList = () => {
	return (
		<div>
			<h4>Snippets List</h4>
			
			<NavLink to="/snippets/1"> Snippet 1 </NavLink>
			<NavLink to="/snippets/2"> Snippet 2 </NavLink>
			<NavLink to="/snippets/3"> Snippet 3 </NavLink>
			<NavLink to="/snippets/4"> Snippet 4 </NavLink>
		</div>
	)
};

export default SnippetsList;
