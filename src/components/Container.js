import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import containerTypes from "@/constants/containerTypes";
import styles from "@/constants/styles";

const Container = ({ className, children }) => {
	return (
		<div className={className}>
			{children}
		</div>
	);
};

Container.propTypes = {
	className: PropTypes.string,
	children: PropTypes.array
};

export default styled(Container)`
    width: ${styles.container_small};
    margin: 64px auto;
    padding: 0 ${styles.container_margin_small};

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        width: ${styles.container_medium};
        padding: 0 ${styles.container_margin_medium};
    }

    @media only screen and (min-width: ${styles.container_large}) {
        width: ${props => props.type === containerTypes.text ? styles.container_medium : styles.container_large};
        padding: 0 ${styles.container_margin_large};
    }
`;
