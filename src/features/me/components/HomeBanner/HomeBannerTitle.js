import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import i18n from "@i18n";

const HomeBannerTitle = ({ className }) => {
	return (
		<div className={className}>
			<h2>{i18n.t("home.title")}</h2>
			<p>{i18n.t("home.subtitle")}</p>
		</div>
	);
};

HomeBannerTitle.propTypes = {
	className: PropTypes.string
};

export default styled(HomeBannerTitle)`
    color: #fff;

    & h2 {
        font-size: 90px;
        margin: 0;
    }

    & p {
        font-size: 22px;
        margin: 0;
    }
`;
