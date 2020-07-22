import React from "react";    

import PropTypes from "prop-types";

import { getPath, getViewBox } from "@/utils/svg"

const SVG = ({ name, style, onClick, viewBox, width, className, height, fill }) => <svg
	className={className}
	style={style}
	onClick={onClick}
	width={width}
	height={height}
	viewBox={viewBox || getViewBox(name)}
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink"
	fill={fill}
>
	{ getPath(name) }
</svg>

SVG.propTypes = {
	name: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
	viewBox: PropTypes.string,
	width: PropTypes.string,
	className: PropTypes.string,
	height: PropTypes.string,
	fill: PropTypes.string
};

SVG.defaultProps = {
	className: "",
	style: {},
	onClick: () => { /* do nothing */ },
	name: "",
	viewBox: "",
	width: "100%",
	height: "100%"
}

export default SVG;
