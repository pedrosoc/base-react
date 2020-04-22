import React from "react";

import i18n from "@i18n";

import Container from "@/components/Container";

export const About = () => {
	return (
		<Container>
			<h4> { i18n.t("about.title") } </h4>
		</Container>
	);
};

export default About;
