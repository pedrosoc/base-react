import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import SVG from "@/components/SVG";

const HeaderSocial = ({ className }) => {
	return (
		<div className={className}>
			<SVG name="instagram" width="30" />
			<SVG name="twitter" width="30" />
			<SVG name="youtube" width="30" />
		</div>
	);
};

HeaderSocial.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderSocial)`
    display: flex;
    justify-content: space-between;
    min-width: 120px;
`;
