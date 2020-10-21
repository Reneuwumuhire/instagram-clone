import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWgzxdne6FN-dSPQ6we7bsmEIcj5Pj0WI",
    authDomain: "instagram-clone-c76c1.firebaseapp.com",
    databaseURL: "https://instagram-clone-c76c1.firebaseio.com",
    projectId: "instagram-clone-c76c1",
    storageBucket: "instagram-clone-c76c1.appspot.com",
    messagingSenderId: "23361414038",
    appId: "1:23361414038:web:d7af1e49460ee5312033b7",
    measurementId: "G-1YTV0JFHGS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  { db, auth, storage };