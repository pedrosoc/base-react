import React from "react";
import styled, { keyframes } from "styled-components"

import logo from "./assets/logo.svg";

const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;	

	height: 100vh;
	background-color: #222;
`

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const Image = styled.img`
	animation: ${rotate} infinite 20s linear;
	height: 100px;
`

const Screen = () => {
	return (
		<Header>
			<Image src={logo} alt="logo" />
		</Header>
	)
}

export default Screen;
