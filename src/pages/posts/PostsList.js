import React from "react";

import { NavLink } from "react-router-dom";

export const PostsList = () => {
	return (
		<div>
			<h4>Posts List</h4>
			
			<NavLink to="/posts/1"> Post 1 </NavLink>
			<NavLink to="/posts/2"> Post 2 </NavLink>
			<NavLink to="/posts/3"> Post 3 </NavLink>
			<NavLink to="/posts/4"> Post 4 </NavLink>
		</div>
	)
};

export default PostsList;
