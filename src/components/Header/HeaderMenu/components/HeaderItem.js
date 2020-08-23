import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import styles from "@/constants/styles";

const HeaderItem = ({ className, closeModal, to, title }) => {
	return (
		<NavLink className={className} onClick={closeModal} to={to}> { title } </NavLink>
	);
};

HeaderItem.propTypes = {
	className: PropTypes.string,
	closeModal: PropTypes.func,
	to: PropTypes.string,
	title: PropTypes.string
};

export default styled(HeaderItem)`
	text-decoration: none;
    color: #000;
	font-weight: 500;
    margin-bottom: 15px;

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
        margin-bottom: 0;
        margin-right: 30px;
        height: fit-content;
	}
`;
