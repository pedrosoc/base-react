import http from "@http";

const getAll = () => http.get("/podcasts")
	.then(({ data }) => data);

const get = id => http.get(`/podcasts/${id}`)
	.then(({ data }) => data);

export default { getAll, get };
