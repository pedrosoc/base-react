import React from "react";

import i18n from "@i18n";

import Section from "@/components/Section";

export const About = () => {
	return (
		<Section first>
			<h4> { i18n.t("about.title") } </h4>
		</Section>
	);
};

export default About;
