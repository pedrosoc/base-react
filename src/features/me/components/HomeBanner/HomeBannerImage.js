import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import i18n from "@i18n";

import Banner from "@/assets/images/macacast_macaco.png";

const HomeBannerImage = ({ className }) => {
	return (
		<img
			className={className}
			alt={i18n.t("home.altImage")}
			src={Banner}
		/>
	);
};

HomeBannerImage.propTypes = {
	className: PropTypes.string
};

export default styled(HomeBannerImage)`
	max-width: 35%;
`;
