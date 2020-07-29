import React from "react";
import PropTypes from "prop-types";

import SVG from "@/components/SVG";
import styled from "styled-components";

const SocialIcons = ({ className, uuid, title, size, distance, fill, socialList }) => {
	return (
		<div className={className}>
			<h4> {title} </h4>
			<div>
				{socialList.map(s => <a 
					key={`${s.name}_${uuid}`}
					target="_blank"
					rel="noopener noreferrer"
					href={s.url}
				>
					<SVG name={s.name} width={size} fill={fill} />
				</a>
				)}
			</div>
		</div>
	);
};

SocialIcons.propTypes = {
	className: PropTypes.string,
	uuid: PropTypes.string,
	title: PropTypes.string,
	size: PropTypes.string,
	distance: PropTypes.string,
	fill: PropTypes.string,
	socialList: PropTypes.array
};

export default styled(SocialIcons)`
	display: flex;
	flex-direction: column;

	& > h4 {
		margin-bottom: ${props => props.title ? "20px" : "0"};
	}

	& > div {
		height: ${props => `${props.size}px`};
	}

	& > div > * {
		margin-right: ${props => `${props.distance}`};
	}

	& > div > *:last-child {
		margin-right: 0;
	}
`;
