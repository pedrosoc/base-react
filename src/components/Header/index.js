import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import i18n from "@i18n";

import SVG from "@/components/SVG";

import { postTypes } from "@/constants/postTypes";

const Header = ({ className }) => {
	const types = Object.values(postTypes) || [];

	return (
		<div className={className}>
			<div>
				<div className="teste">
					<h2> CARTÃOPRETO </h2>
				</div>
				<div className="teste2">
					<div className="teste3">
						<NavLink to="/"> { i18n.t("home.title") } </NavLink>
						{types.map(t => <NavLink key={t} to={`/feed?type=${t}`}> { i18n.t(`${t}.title`) } </NavLink>)}
						<NavLink to="/about"> { i18n.t("about.title") } </NavLink>
					</div>
					<div className="teste4">
						<SVG name="instagram" width="30" />
						<SVG name="twitter" width="30" />
						<SVG name="youtube" width="30" />
					</div>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string
};

export default styled(Header)`
	font-family: "Poppins";
	font-weight: 500;
	box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
	
	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1392px;
		height: 84px;

		margin: auto;
		padding: 0 3em;
	}

	& .teste2 {
		display: flex;
		align-items: center;
	}

	& .teste3 {
		display: flex;
		justify-content: space-between;
		min-width: 300px;

		height: fit-content;
		margin-right: 30px;
		padding-right: 30px;
		border-right: 2px solid #000;
	}

	& .teste4 {
		display: flex;
		justify-content: space-between;
		min-width: 120px;
	}

	& a {
		text-decoration: none;
		color: #000;
	}
`;
