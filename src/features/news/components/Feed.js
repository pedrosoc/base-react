import React from "react";
import i18n from "@i18n";

import { NavLink } from "react-router-dom";

import api from "@api";

export class Feed extends React.Component {

	state = {
		news: []
	};

	componentDidMount = async () => {
		const news = await api.news.getAll();
		this.setState({ news });
	};

	render() {
		const { news = [] } = this.state;

		return (
			<div>
				<h4> { i18n.t("news.title") } </h4>
			
				{news.map(p => <NavLink key={p.id} to={`/feed/${p.id}`}> { i18n.t(`${p.type}.item`, { id: p.id }) } </NavLink>)}
			</div>
		);
	}
}

export default Feed;
