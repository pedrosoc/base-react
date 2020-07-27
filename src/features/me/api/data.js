import http from "@http";

const getSocial = () => http.get("/social")
	.then(({ data }) => data);

export default { getSocial };
