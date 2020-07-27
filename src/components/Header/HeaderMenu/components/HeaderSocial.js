import React, { useState, useEffect } from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import api from "@api";

import SocialIcons from "@/components/SocialIcons";
import styles from "@/constants/styles";

const HeaderSocial = ({ className }) => {
	const [social, setSocial] = useState([]);

	const fetchSocial = async () => {
		const socialList = await api.me.data.getSocial();
		setSocial(socialList)
	};

	useEffect(() => {
		if (!social.length) {
			fetchSocial();
		}
	});

	return (
		<SocialIcons
			uuid="header"
			size="30"
			distance="10px"
			fill="#000000"
			socialList={social}
			className={className}
		/>
	);
};

HeaderSocial.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderSocial)`
	display: flex;
	justify-content: space-between;
	height: 30px;

	margin-left: ${styles.container_margin_medium};
`;
