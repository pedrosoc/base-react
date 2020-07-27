/* eslint-disable complexity */
import React, { useState } from "react";

import PropTypes from "prop-types";

import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Modal = ({ trigger, content }) => {
	const [visible, setVisibility] = useState(false);

	if (!visible)
		return <ModalTrigger trigger={trigger} openModal={() => setVisibility(true)} />;

	return (
		<ModalContent content={content} type={"menu"} closeModal={() => setVisibility(false)} />
	);
};

Modal.propTypes = {
	className: PropTypes.string,
	trigger: PropTypes.object,
	content: PropTypes.object
};

export default Modal;
