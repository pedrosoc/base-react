import React from "react";

import PropTypes from "prop-types";

import Modal from "@/components/Modal";
import SVG from "@/components/SVG";

import HeaderMenuMobileContent from "./HeaderMenuMobileContent";

const HeaderMenuMobile = ({ className }) => {
	return (
		<Modal
			trigger={<SVG name="menu" width="25" />}
			content={<HeaderMenuMobileContent />}
		/>
	);
};

HeaderMenuMobile.propTypes = {
	className: PropTypes.string
};

export default HeaderMenuMobile;
