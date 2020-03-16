import http from "@http";

const getAll = () => http.get("/news")
	.then(({ data }) => data);

const get = id => http.get(`/news/${id}`)
	.then(({ data }) => data);

export default { getAll, get };
