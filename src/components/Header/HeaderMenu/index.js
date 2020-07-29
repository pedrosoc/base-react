import React, { Fragment } from "react";

import MediaQuery from "react-responsive";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

import HeaderMenuMobile from "./mobile/HeaderMenuMobile";
import HeaderMenuDesktop from "./desktop/HeaderMenuDesktop";

const HeaderMenu = () => {
	return (
		<Fragment>
			<MediaQuery maxDeviceWidth={styles.breakpoint_medium_max}>
				<HeaderMenuMobile />
			</MediaQuery>
			<MediaQuery minDeviceWidth={styles.breakpoint_medium}>
				<HeaderMenuDesktop />
			</MediaQuery>
		</Fragment>
	);
};

HeaderMenu.propTypes = {
	className: PropTypes.string
};

export default HeaderMenu;
