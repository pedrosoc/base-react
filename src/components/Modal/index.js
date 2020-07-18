/* eslint-disable complexity */
import React, { Fragment, useState } from "react";

import PropTypes from "prop-types";

import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Modal = ({ trigger, content }) => {
	const [visible, setVisibility] = useState(false);

	if (!visible)
		return <ModalTrigger trigger={trigger} openModal={() => setVisibility(true)} />;

	return (
		<Fragment>
			<ModalTrigger trigger={trigger} openModal={() => setVisibility(true)} />
			<ModalContent content={content} type={"menu"} closeModal={() => setVisibility(false)} />
		</Fragment>
	);
};

Modal.propTypes = {
	className: PropTypes.string,
	trigger: PropTypes.object,
	content: PropTypes.object
};

export default Modal;
