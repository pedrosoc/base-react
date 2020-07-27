import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./Container";
import styles from "@/constants/styles";

const Section = ({ className, colored, children }) => {
	return (
		<div className={className}>
			<Container>
				{children}
			</Container>
		</div>
	);
};

Section.propTypes = {
	className: PropTypes.string,
	colored: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default styled(Section)`
    background-color: ${props => props.colored ? props.colored : "transparent"};
    margin: ${props => props.first ? 0 : styles.container_margin_medium} 0 ${styles.container_margin_medium};

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        margin: ${props => props.first ? 0 : styles.container_margin_large} 0 ${styles.container_margin_large};
    }

`;
