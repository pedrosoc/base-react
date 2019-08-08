import axios from "axios";

import { config } from "./config";

const API_URL = config.api.url;

const http = axios.create({
	baseURL: API_URL,
	headers: {
		Accept: "application/json",
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json"
	}
});

export default http;
