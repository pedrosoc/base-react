import http from "@http";

const getAll = () => http.get("/snippets")
	.then(({ data }) => data);

const get = id => http.get(`/snippets/${id}`)
	.then(({ data }) => data);

export default { getAll, get };
