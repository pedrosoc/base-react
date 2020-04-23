import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import HeaderContent from "./HeaderContent";
import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";

const Header = ({ className }) => {
	return (
		<div className={className}>
			<HeaderContent>
				<HeaderLogo />
				<HeaderLinks />
			</HeaderContent>
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
`;
