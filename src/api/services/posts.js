import http from "@http";

const getAll = () => http.get("/posts")
	.then(({ data }) => data);

const get = id => http.get(`/posts/${id}`)
	.then(({ data }) => data);

export default { getAll, get };
