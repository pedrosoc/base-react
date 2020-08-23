import firebase from "@firebaseApi";
import { parseResponse } from "@/utils/firebaseUtils";

const getAll = () => firebase
	.collection("podcasts")
	.orderBy("episode", "desc")
	.get()
	.then(q => parseResponse(q));

const getByEpisode = ep => firebase
	.collection("podcasts")
	.where("episode", "==", ep)
	.get()
	.then(q => parseResponse(q));
	
const getSome = limit => firebase
	.collection("podcasts")
	.orderBy("episode", "desc")
	.limit(limit)
	.get()
	.then(q => parseResponse(q));
	
const getSomeDifferent = async (ep, limit) => {
	const recent = await firebase
		.collection("podcasts")
		.orderBy("episode", "desc")
		.where("episode", ">", ep)
		.limit(limit)
		.get()
		.then(q => parseResponse(q));

	if (recent.length === limit)
		return recent;

	const old = await firebase
		.collection("podcasts")
		.orderBy("episode", "desc")
		.where("episode", "<", ep)
		.limit(limit - recent.length)
		.get()
		.then(q => parseResponse(q));

	return [...recent, ...old];
}

export default { getAll, getSome, getByEpisode, getSomeDifferent };
