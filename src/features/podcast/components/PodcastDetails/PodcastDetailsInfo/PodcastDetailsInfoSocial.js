import React from "react";
import PropTypes from "prop-types";

import i18n from "@i18n";

import SocialIcons from "@/components/SocialIcons";

const PodcastDetailsInfoSocial = ({ uuid, socialList }) => {
	return (
		<SocialIcons
			uuid={uuid}
			title={i18n.t("podcast.avaiableFor")}
			size="50"
			distance="20px"
			fill="#ffffff"
			socialList={socialList}
		/>
	);
};

PodcastDetailsInfoSocial.propTypes = {
	uuid: PropTypes.string,
	socialList: PropTypes.array
};

export default PodcastDetailsInfoSocial;
