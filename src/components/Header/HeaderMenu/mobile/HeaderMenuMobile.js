import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import Modal from "@/components/Modal";
import SVG from "@/components/SVG";

import HeaderItems from "../components/HeaderItems";
import HeaderSocial from "../components/HeaderSocial";

const HeaderMenuMobile = ({ className }) => {
	return (
		<Modal
			trigger={<SVG name="menu" width="25" />}
			content={
				<div className={className}>
					<HeaderSocial />
					<HeaderItems />
				</div>
			}
		/>
	);
};

HeaderMenuMobile.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderMenuMobile)`
    width: 300px;
    height: 100%;

    background-color: #fff;
`;
