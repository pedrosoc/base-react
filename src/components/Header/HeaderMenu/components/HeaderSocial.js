import React, { useState, useEffect } from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import api from "@api";
import i18n from "@i18n";

import SocialIcons from "@/components/SocialIcons";
import styles from "@/constants/styles";

import { isEmpty } from "@/utils/list";

const HeaderSocial = ({ className }) => {
	const [social, setSocial] = useState([]);

	const fetchSocial = async () => {
		const socialList = await api.me.data.getSocial();
		setSocial(socialList)
	};

	useEffect(() => {
		if (isEmpty(social)) {
			fetchSocial();
		}
	});

	const isMobile = useMediaQuery({
		query: `(max-device-width: ${styles.breakpoint_medium_max})`
	});

	return (
		<SocialIcons
			className={className}
			title={isMobile ? i18n.t("header.social") : ""}
			uuid="header"
			size={isMobile ? "40" : "30"}
			distance="9px"
			fill="#000000"
			socialList={social}
		/>
	);
};

HeaderSocial.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderSocial)`
	display: flex;
	justify-content: space-between;
	width: fit-content;
	margin: auto;
	margin-top: ${styles.container_margin_large};

	& h4 {
		font-weight: 500;
	}

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
		margin-top: 0;
		margin-left: ${styles.container_margin_medium};
	}
`;
