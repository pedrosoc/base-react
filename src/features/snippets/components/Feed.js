import React from "react";
import i18n from "@i18n";

import { NavLink } from "react-router-dom";

import api from "@api";

export class Feed extends React.Component {

	state = {
		snippets: []
	};

	componentDidMount = async () => {
		const snippets = await api.snippets.getAll();
		this.setState({ snippets });
	};

	render() {
		const { snippets } = this.state;

		return (
			<div>
				<h4> { i18n.t("snippets.title") } </h4>
			
				{snippets.map(p => <NavLink key={p.id} to={`/feed/${p.id}`}> { i18n.t(`${p.type}.item`, { id: p.id }) } </NavLink>)}
			</div>
		);
	}
}

export default Feed;
