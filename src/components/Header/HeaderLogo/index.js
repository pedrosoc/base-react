import React from "react";

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContent = ({ className }) => {
	return (
		<NavLink to="/" className={className}>
			<h2> MACACAST </h2>
		</NavLink>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderContent)`
	color: #000;
	text-decoration: none;
`;
