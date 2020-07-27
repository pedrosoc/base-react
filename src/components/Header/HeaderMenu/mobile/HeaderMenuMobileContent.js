import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import HeaderItems from "../components/HeaderItems";
import HeaderSocial from "../components/HeaderSocial";

const HeaderMenuMobile = ({ className, closeModal }) => {
	return (
		<div className={className}>
			<HeaderSocial />
			<HeaderItems />
		</div>
	);
};

HeaderMenuMobile.propTypes = {
	className: PropTypes.string,
	closeModal: PropTypes.func
};

export default styled(HeaderMenuMobile)`
    width: 300px;
    height: 100%;

    background-color: #fff;
`;
