import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import i18n from "@i18n";

import routes from "@/constants/routes";
import styles from "@/constants/styles";

const PodcastListHeader = ({ className, title, showLink }) => {
	if (showLink)
		return (
			<div className={className}>
				<h4>{title}</h4>
				<a href={routes.podcasts.url}>{i18n.t("podcasts.seeMore")}</a>
			</div>
		);
        
	return <h4 className={className}>{title}</h4>
}

PodcastListHeader.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	showLink: PropTypes.bool
};

export default styled(PodcastListHeader)`
    display: flex;
    flex-direction: column;
	margin-bottom: 30px;

    & > a {
        margin-top: 10px;
    }

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;
