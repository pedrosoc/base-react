import React, { useState, useEffect } from "react";
import i18n from "@i18n";

import { NavLink } from "react-router-dom";

import api from "@api";

const Feed = () => {
	const { podcasts } = useState([]);

	useEffect(() => {
		async function fetchData() {
			const episodes = await api.podcast.getAll();
			console.log(episodes);
		}

		fetchData();
	});

	return (
		<div>
			<h4> { i18n.t("podcasts.title") } </h4>
		
			{podcasts.map(p => <NavLink key={p.id} to={`/podcasts/${p.id}`}> { i18n.t(`${p.type}.item`, { id: p.id }) } </NavLink>)}
		</div>
	);
}

export default Feed;
