import axios from "axios"

const API_URL = "https://myapi.com.br"

const http = axios.create({
	baseURL: API_URL,
	headers: {
		Accept: "application/json",
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json"
	}
});

export default http;
