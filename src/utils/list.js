const isEmpty = obj => {
	return !Array.isArray(obj) || !obj.length;
};

export { isEmpty };
