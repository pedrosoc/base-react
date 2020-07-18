import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import HeaderItems from "../components/HeaderItems";
import HeaderSocial from "../components/HeaderSocial";

const HeaderMenuDesktop = ({ className }) => {
	return (
		<div className={className}>
			<HeaderItems />
			<HeaderSocial />
		</div>
	);
};

HeaderMenuDesktop.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderMenuDesktop)`
    display: flex;
    align-items: center;
`;
