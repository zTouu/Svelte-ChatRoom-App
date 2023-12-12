import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPOgTi4E1H0Lv_Jhk3g0TOFia1ZsrQ1rg",
    authDomain: "chatroom-app-141a6.firebaseapp.com",
    projectId: "chatroom-app-141a6",
    storageBucket: "chatroom-app-141a6.appspot.com",
    messagingSenderId: "1006022422291",
    appId: "1:1006022422291:web:c1676b8d2e54015b5ef4e6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();