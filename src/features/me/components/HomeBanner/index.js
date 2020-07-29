import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

import HomeBannerImage from "./HomeBannerImage";
import HomeBannerTitle from "./HomeBannerTitle";

const Home = ({ className }) => {
	return (
		<div className={className}>
			<HomeBannerTitle />
			<HomeBannerImage />
		</div>
	);
};

Home.propTypes = {
	className: PropTypes.string
};

export default styled(Home)`
	display: flex;
	flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
        flex-direction: row;
    }
`;
