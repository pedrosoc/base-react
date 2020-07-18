import React from "react";

import PropTypes from "prop-types";

const ModalTrigger = ({ trigger, openModal }) => {
	return React.cloneElement(trigger, { onClick: openModal });
};

ModalTrigger.propTypes = {
	trigger: PropTypes.object,
	openModal: PropTypes.func
};

export default ModalTrigger;
