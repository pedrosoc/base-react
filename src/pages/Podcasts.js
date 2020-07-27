import React from "react";

import Section from "@/components/Section";
import PodcastFeed from "@/features/podcast/components/PodcastFeed";

export const Podcasts = () => {
	return (
		<Section first>
			<PodcastFeed />
		</Section>
	);
};

export default Podcasts;
