import React from "react";

import MediaQuery from "react-responsive";
import styled from "styled-components";
import PropTypes from "prop-types";

import Modal from "@/components/Modal";
import SVG from "@/components/SVG";
import styles from "@/constants/styles";

import HeaderItems from "./HeaderItems";
import HeaderSocial from "./HeaderSocial";

const HeaderLinks = ({ className }) => {
	return (
		<div className={className}>
			<MediaQuery maxDeviceWidth={styles.breakpoint_medium_max}>
				<Modal
					trigger={<SVG name="menu" width="25" />}
					content={
						<div className="menu">
							<HeaderSocial />
							<HeaderItems />
						</div>
					}
				>
				</Modal>
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

	& .menu {
		width: 300px;
		height: 100%;

		background-color: #fff;
	}
`;
