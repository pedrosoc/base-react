import React from "react";

import PropTypes from "prop-types";

const HeaderContent = ({ className }) => {
	return (
		<div className={className}>
			<h2> MACACAST </h2>
		</div>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string
};

export default HeaderContent;
