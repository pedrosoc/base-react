import React, { Component } from 'react';

import styled, { keyframes } from "styled-components"

import logo from './logo.svg';

const Container = styled.div`
	text-align: center
`

const Header = styled.header`
	background-color: #222
	height: 150px
	padding: 20px
	color: white
`

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}

	to {
		transform: rotate(360deg)
	}
`

const Image = styled.img`
	animation: ${rotate} infinite 20s linear;
	height: 80px;
`

const Title = styled.h1`
	font-size: 1.5em;
`

const Description = styled.p`
	font-size: large;
`

class App extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Image src={logo} alt="logo" />
					<Title>Welcome to React</Title>
				</Header>
				<Description>
					To get started, edit <code>src/App.js</code> and save to reload.
				</Description>
			</Container>
		)
	}
}

export default App;
