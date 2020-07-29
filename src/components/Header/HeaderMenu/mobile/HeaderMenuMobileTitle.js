import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import i18n from "@i18n";
import SVG from "@/components/SVG";

const HeaderMenuMobileTitle = ({ className, closeModal }) => {
	return (
		<div className={className}>
			<h4>{i18n.t("header.title")}</h4>
			<SVG onClick={closeModal} name="close" width="15" />
		</div>
	);
};

HeaderMenuMobileTitle.propTypes = {
	className: PropTypes.string,
	closeModal: PropTypes.func
};

export default styled(HeaderMenuMobileTitle)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
