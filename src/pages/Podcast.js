import React from "react";

import Container from "@/components/Container";
import PodcastFeed from "@/features/podcast/components/PodcastFeed";

export const Home = () => {
	return (
		<Container>
			<PodcastFeed />
		</Container>
	);
};

export default Home;
