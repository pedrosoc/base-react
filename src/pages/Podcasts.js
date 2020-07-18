import React from "react";

import i18n from "@i18n";

import Container from "@/components/Container";

export const Home = () => {
	return (
		<Container>
			<h4> { i18n.t("podcasts.title") } </h4>
		</Container>
	);
};

export default Home;
