import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import SVG from "@/components/SVG";
import styles from "@/constants/styles";

const HeaderSocial = ({ className }) => {
	return (
		<div className={className}>
			<SVG name="spotify" width="30" />
			<SVG name="youtube" width="30" />
			<SVG name="instagram" width="30" />
			<SVG name="twitter" width="30" />
		</div>
	);
};

HeaderSocial.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderSocial)`
	display: flex;
	justify-content: space-between;
	height: 84px;
	max-width: 145px;

	margin-left: ${styles.container_margin_medium};

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
		min-width: 145px;
	}
`;
