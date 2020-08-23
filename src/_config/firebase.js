import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBkLPUAC0Vb-8jdicS-B4S-qy6_9TlXEYE",
	authDomain: "pedrosoc-76017.firebaseapp.com",
	databaseURL: "https://pedrosoc-76017.firebaseio.com",
	projectId: "pedrosoc-76017",
	storageBucket: "pedrosoc-76017.appspot.com",
	messagingSenderId: "825030547331",
	appId: "1:825030547331:web:52b1ea220c027fc02d48b6",
	measurementId: "G-CP9BJ3P74Y"
};

firebase.initializeApp(firebaseConfig);
const firebaseFirestore = firebase.firestore();

export default firebaseFirestore;
