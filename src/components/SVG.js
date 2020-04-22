import React from "react";    

import PropTypes from "prop-types";

import { getPath, getViewBox } from "@/utils/svg"

const SVG = ({ name = "", style = {}, viewBox = "", width = "100%", className = "", height = "100%"}) => <svg
	className={className}
	style={style}
	width={width}
	height={height}
	viewBox={viewBox || getViewBox()}
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink"
>
	{ getPath(name) }
</svg>

SVG.propTypes = {
	name: PropTypes.string,
	style: PropTypes.object,
	viewBox: PropTypes.string,
	width: PropTypes.string,
	className: PropTypes.string,
	height: PropTypes.string
};

SVG.defaultProps = {
	className: "",
	style: {},
	name: "",
	viewBox: "",
	width: "100%",
	height: "100%"
}

export default SVG;
