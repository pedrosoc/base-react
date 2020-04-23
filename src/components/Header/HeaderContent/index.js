import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

const HeaderContent = ({ className, children }) => {
	return (
		<div className={className}>
			{ children }
		</div>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default styled(HeaderContent)`
    display: flex;
	align-items: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1392px;
    height: 84px;

    margin: auto;
    padding: 0 ${styles.container_margin_small};

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
        padding: 0 ${styles.container_margin_medium};
	}

    @media only screen and (min-width: ${styles.container_large}) {
        padding: 0 ${styles.container_margin_large};
    }
`;
