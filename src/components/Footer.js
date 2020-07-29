import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "./Section/Container";
import styles from "@/constants/styles";
import i18n from "@i18n";

const Footer = ({ className }) => {
	return (
		<Container className={className}>
			{i18n.t("footer.copyright")}
			<span>{i18n.t("footer.title")}</span>
		</Container>
	);
};

Footer.propTypes = {
	className: PropTypes.string
};

export default styled(Footer)`
    display: flex;
    flex-direction: column;

	font-family: "Poppins";
    color: #666;
    font-size: 12px;
    
    padding: ${styles.container_margin_small};
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        flex-direction: row;

        & > span {
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid rgba(0, 0, 0, 0.6);
        }
	}
`;
