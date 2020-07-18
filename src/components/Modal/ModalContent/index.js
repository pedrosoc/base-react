/* eslint-disable complexity */
import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const ModalContent = ({ className, content, type, closeModal }) => {
	const contentRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (event.target.contains(contentRef.current))
				closeModal();
		}
    
		document.addEventListener("mousedown", handleClickOutside);
		
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [contentRef, closeModal]);

	return (
		<div ref={contentRef} className={className}>
			{ React.cloneElement(content, { closeModal }) }
		</div>
	);
};

ModalContent.propTypes = {
	className: PropTypes.string,
	content: PropTypes.object,
	type: PropTypes.string,
	closeModal: PropTypes.func,
	visible: PropTypes.bool
};

export default styled(ModalContent)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: ${props => props.type === "menu" ? "flex-end" : "center"};

    background-color: rgba(0, 0, 0, 0.8);
`;
