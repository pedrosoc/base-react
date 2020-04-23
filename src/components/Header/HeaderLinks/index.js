import React from "react";

import MediaQuery from "react-responsive";
import styled from "styled-components";
import PropTypes from "prop-types";

import SVG from "@/components/SVG";
import styles from "@/constants/styles";

import HeaderItems from "./HeaderItems";
import HeaderSocial from "./HeaderSocial";

const HeaderLinks = ({ className }) => {
	return (
		<div className={className}>
			<MediaQuery maxDeviceWidth={styles.breakpoint_medium_max}>
				<SVG name="menu" width="25" />
			</MediaQuery>
			<MediaQuery minDeviceWidth={styles.breakpoint_medium}>
				<HeaderItems />
				<HeaderSocial />
			</MediaQuery>
		</div>
	);
};

HeaderLinks.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderLinks)`
    display: flex;
    align-items: center;
`;
