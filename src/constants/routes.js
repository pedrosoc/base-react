import i18n from "@i18n";

export default { 
	home: {
		url: "/",
		title: i18n.t("header.home")
	},
	podcastDetails: {
		url: "/podcasts/:id",
		urlFor: id => `/podcasts/${id}`
	},
	podcasts: {
		url: "/podcasts",
		title: i18n.t("header.podcasts")
	},
	about: {
		url: "/about",
		title: i18n.t("header.about")
	}
};
