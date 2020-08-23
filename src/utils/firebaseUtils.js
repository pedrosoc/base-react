const parseResponse = response => {
	const result = [];
			
	response.forEach((doc) => {
		result.push({ id: doc.id, ...doc.data()});
	});
	
	return result;
};

export { parseResponse };
