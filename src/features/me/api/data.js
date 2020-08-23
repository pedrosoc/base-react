import firebase from "@firebaseApi";
import { parseResponse } from "@/utils/firebaseUtils";

const getSocial = () => firebase.collection("social").get().then(q => parseResponse(q));

export default { getSocial };
